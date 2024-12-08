'use client';

import {
  useInputFieldStore,
  useSaveAsDraftStore,
} from '@/app/zustand-store/input-field-store';
import { CustomTextField } from '@/app/input-fields/CustomTextField';
import { useEffect } from 'react';
import useDraftStorage from '@/app/utils/customHooks/useDraftStorage';

export default function Preview() {
  const {
    inputFieldDataState,
    setInputFieldDataState,
    formTitle,
    setFormTitle,
  } = useInputFieldStore();
  const { saveAsDraftState, setSaveAsDraftState } = useSaveAsDraftStore();

  useDraftStorage();

  return (
    <div className=" w-full max-w-[600px]  m-auto border min-h-screen ">
      <div className="h-[56px] border-b border-gray-300 w-full flex justify-between items-center p-4 ">
        <p>{formTitle}</p>
      </div>
      <div className=" p-4  space-y-2">
        {inputFieldDataState.map((item, index) => (
          <CustomTextField
            key={item.text + '-' + index}
            fieldData={item}
            id={item}
            index={index}
            preview={true}
          />
        ))}
      </div>
      <div className="px-4 py-4 md:px-6 w-full ">
        <div className="flex justify-end m-auto">
          <button className="bg-green-600 border border-green-900 text-white rounded-xl p-1 px-3 text-[14px] ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}