// app/admin/testimonials/AddTestimonialForm.tsx
"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { FaPlus, FaImage } from "react-icons/fa";
import Swal from "sweetalert2";
import { addTestimonial } from "./actions";

export default function AddTestimonialForm() {
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);

    const formData = new FormData(e.currentTarget);

    try {
      const result = await addTestimonial(formData);

      if (result && result.success) {
        Swal.fire({
          title: "تم الحفظ!",
          text: "تمت إضافة رأي العميل بنجاح.",
          icon: "success",
          confirmButtonText: "موافق",
          background: "#1e293b",
          color: "#fff",
          confirmButtonColor: "#eab308",
        });

        // إعادة ضبط الحقول وتفريغ النموذج
        formRef.current?.reset();
        
        // تحديث مكونات الصفحة لجلب وعرض البيانات الجديدة فوراً
        router.refresh();
      } else {
        Swal.fire({
          title: "خطأ",
          text: result?.error || "حدث خطأ أثناء حفظ الرأي.",
          icon: "error",
          confirmButtonText: "موافق",
          background: "#1e293b",
          color: "#fff",
          confirmButtonColor: "#3b82f6",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "خطأ في الاتصال",
        text: "حدثت مشكلة أثناء محاولة معالجة الطلب.",
        icon: "error",
        confirmButtonText: "موافق",
        background: "#1e293b",
        color: "#fff",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl border border-white/10 mb-12">
      <h2 className="text-xl font-bold text-yellow-500 mb-4 flex items-center gap-2">
        <FaPlus /> إضافة رأي جديد
      </h2>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="client_name"
          required
          placeholder="اسم العميل"
          disabled={isSaving}
          className="bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none disabled:opacity-50"
        />

        <input
          name="role"
          placeholder="الصفة (مثال: مالك فيلا)"
          disabled={isSaving}
          className="bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none disabled:opacity-50"
        />

        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
            <FaImage />
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            disabled={isSaving}
            className="block w-full text-sm text-slate-400
              file:mr-4 file:py-3 file:px-4
              file:rounded-l-lg file:border-0
              file:text-sm file:font-semibold
              file:bg-slate-800 file:text-yellow-500
              hover:file:bg-slate-700
              bg-slate-950 rounded-lg border border-white/10 cursor-pointer disabled:opacity-50"
          />
        </div>

        <div className="flex gap-4">
          <select
            name="rating"
            disabled={isSaving}
            className="bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none w-full disabled:opacity-50"
          >
            <option value="5">⭐⭐⭐⭐⭐ (5)</option>
            <option value="4">⭐⭐⭐⭐ (4)</option>
            <option value="3">⭐⭐⭐ (3)</option>
          </select>
        </div>

        <textarea
          name="content"
          required
          placeholder="نص الرأي..."
          rows={3}
          disabled={isSaving}
          className="md:col-span-2 bg-slate-950 p-3 rounded-lg border border-white/10 text-white focus:border-yellow-500 outline-none resize-none disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={isSaving}
          className="md:col-span-2 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold py-3 rounded-lg transition disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSaving ? (
            <>
              <svg className="animate-spin h-5 w-5 text-slate-900" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span>جاري حفظ الرأي...</span>
            </>
          ) : (
            "حفظ الرأي"
          )}
        </button>
      </form>
    </div>
  );
}