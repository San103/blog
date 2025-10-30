"use client";

import React from "react";
import { List } from "lucide-react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerBody } from "@/components/ui/drawer";
import { TableOfContents } from "@/components/table-of-contents";

export function MobileTableOfContents() {
  return (
    <Drawer>
      <DrawerTrigger className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
        <List size={20} />
      </DrawerTrigger>

      <DrawerContent className="lg:hidden">
        <DrawerHeader>
          <h3 className="font-semibold">Table of Contents</h3>
        </DrawerHeader>

        <DrawerBody>
          <TableOfContents />
        </DrawerBody>

        {/* <DrawerFooter>
          <PromoContent variant="mobile" />
        </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
