"use client";

import { useEffect, useState } from "react";

interface SliederProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function SliederEX({ isOpen = false, onClose }: SliederProps) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    setVisible(isOpen); // อัปเดต state เมื่อ parent เปลี่ยน isOpen
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    onClose?.();
  };

  return (
    <div
      className={`xl:translate-x-0 transition-transform duration-300 ${
        visible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      EX
    </div>
  );
}
