import { Drawer, DrawerContent } from "@/components/ui/drawer";
import React from "react";

interface CustomDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function CustomDrawer({
  open,
  onOpenChange,
  children,
  className,
}: CustomDrawerProps) {
  return (
    <div>
      <Drawer direction="right" open={open} onOpenChange={onOpenChange}>
        <DrawerContent className={`${className}`}>{children}</DrawerContent>
      </Drawer>
    </div>
  );
}

export default CustomDrawer;
