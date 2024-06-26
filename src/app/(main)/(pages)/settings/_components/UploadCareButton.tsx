"use client";
import React, { useEffect, useRef } from "react";
import {
  FileUploaderRegular,
  UploadCtxProvider,
} from "@uploadcare/react-uploader";
import "@uploadcare/react-uploader/core.css";
import { useRouter } from "next/navigation";
import * as LR from "@uploadcare/blocks";

type Props = {
  onUpload?: any;
};

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter();
  const ctxProviderRef = useRef<
    typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider
  >(null);

  const handleUpload = async (e: any) => {
    console.log("event");
    const file = await onUpload(e.cdnUrl);

    if (!file) {
      router.refresh();
    }
  };

  useEffect(() => {
    const ctx = document.querySelector("upload-ctx");
    const handleUpload = async (e: any) => {
      console.log("event");
      const file = await onUpload(e.detail.cdnUrl);

      if (!file) {
        // router.refresh();
      }
    };
    // ctxProviderRef.current?.addEventListener(
    //   "file-upload-success",
    //   handleUpload
    // );
    ctx?.addEventListener("file-upload-success", handleUpload);
  }, []);

  return (
    <div>
      <FileUploaderRegular
        pubkey="488f4928cb48e1a61499"
        ctxName="upload-ctx"
        onFileUploadSuccess={handleUpload}
      />
    </div>
  );
};

export default UploadCareButton;
