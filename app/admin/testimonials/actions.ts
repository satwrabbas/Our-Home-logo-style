// app/admin/testimonials/actions.ts
'use server';

import { createClient } from '../../utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function addTestimonial(formData: FormData) {
  try {
    const supabase = await createClient();

    const imageFile = formData.get('image') as File;
    let image_url = null;

    // 1. معالجة ورفع الصورة إن وجدت
    if (imageFile && imageFile.size > 0) {
      const fileName = `${Date.now()}-${imageFile.name.replace(/\s/g, '_')}`;
      
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('testimonials') 
        .upload(fileName, imageFile, { upsert: false });

      if (uploadError) {
        console.error("❌ UPLOAD ERROR:", uploadError);
        return { success: false, error: `فشل رفع الصورة: ${uploadError.message}` };
      }

      const { data: publicData } = supabase.storage
        .from('testimonials')
        .getPublicUrl(fileName);
        
      image_url = publicData.publicUrl;
    }

    // 2. قراءة بقية البيانات
    const client_name = formData.get('client_name');
    const role = formData.get('role');
    const content = formData.get('content');
    const rating = Number(formData.get('rating'));

    if (!client_name || !content) {
      return { success: false, error: 'اسم العميل ونص الرأي مطلوبان.' };
    }

    const data = {
      client_name,
      role,
      content,
      rating,
      image_url,
    };

    // 3. الإدخال في قاعدة البيانات
    const { error } = await supabase.from('testimonials').insert(data);

    if (error) {
      console.error("❌ Database Error:", error);
      return { success: false, error: `فشل حفظ البيانات: ${error.message}` };
    }

    // 4. إعادة التحقق من مسارات الكاش
    revalidatePath('/admin/testimonials');
    revalidatePath('/');
    
    return { success: true };
  } catch (err: any) {
    console.error("❌ Action Exception:", err);
    return { success: false, error: err.message || 'حدث خطأ غير متوقع.' };
  }
}

export async function deleteTestimonial(formData: FormData) {
  const id = formData.get('id');
  const supabase = await createClient();
  await supabase.from('testimonials').delete().eq('id', id);
  revalidatePath('/admin/testimonials');
  revalidatePath('/');
}