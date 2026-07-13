// app/admin/actions.ts
'use server';

import { createClient } from '../utils/supabase/server';
import { revalidatePath } from 'next/cache';

export async function deleteProject(formData: FormData) {
  const id = formData.get('id');
  const imageUrl = formData.get('image_url') as string;
  const supabase = await createClient();

  if (imageUrl) {
    const fileName = imageUrl.split('/').pop(); 
    if (fileName) {
      await supabase.storage
        .from('projects')
        .remove([fileName]);
    }
  }

  const { error } = await supabase
    .from('projects')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting project:', error);
    return; 
  }

  revalidatePath('/admin/projects');
  revalidatePath('/'); 
  revalidatePath('/portfolio'); 
}