import { useTranslation } from "react-i18next";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Check, Mail } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  handle: string;
}

export function SocialLinks() {
  const { t } = useTranslation();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const emailAddress = "jy@saget.me";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const links: SocialLink[] = [
    {
      name: t("links.instagram"),
      icon: <FaInstagram className="h-8 w-8" />,
      url: "https://www.instagram.com/jhih_yu_lin",
      handle: "@jhih_yu_lin",
    },
    {
      name: t("links.github"),
      icon: <FaGithub className="h-8 w-8" />,
      url: "https://github.com/jhihyulin",
      handle: "@jhihyulin",
    },
    {
      name: t("links.discord"),
      icon: <FaDiscord className="h-8 w-8" />,
      url: "https://discord.com/users/561051528065187862",
      handle: "@hack_a_pizza",
    },
    {
      name: t("links.telegram"),
      icon: <FaTelegram className="h-8 w-8" />,
      url: "https://t.me/jhihyulin",
      handle: "@jhihyulin",
    },
    {
      name: t("links.farcaster"),
      icon: <SiFarcaster className="h-8 w-8" />,
      url: "https://farcaster.xyz/hack-a-pizza",
      handle: "@hack-a-pizza",
    },
    {
      name: t("links.email"),
      icon: <FaEnvelope className="h-8 w-8" />,
      url: "mailto:jy@saget.me",
      handle: "jy@saget.me",
    },
  ];

  return (
    <Card className="border-0 shadow-md bg-linear-to-br from-card to-card/50">
      <CardHeader>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("sections.links")}
        </h2>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {links.slice(0, -1).map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="border-0 bg-muted/30 hover:bg-muted/50 hover:shadow-lg hover:-translate-y-1 shadow-sm transition-all duration-200 h-full">
                <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                  <span className="shrink-0 text-2xl group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="text-xs font-medium line-clamp-1">
                    {link.handle}
                  </span>
                </CardContent>
              </Card>
            </a>
          ))}

          {isDesktop ? (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="group">
                  <Card className="border-0 bg-muted/30 hover:bg-muted/50 shadow-sm transition-colors h-full">
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                      <span className="shrink-0 text-2xl group-hover:scale-110 transition-transform">
                        <FaEnvelope className="h-8 w-8" />
                      </span>
                      <span className="text-xs font-medium line-clamp-1">
                        {emailAddress}
                      </span>
                    </CardContent>
                  </Card>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{t("links.email")}</DialogTitle>
                  <DialogDescription>
                    {t("sections.links")} - Email
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
                  <code className="flex-1 text-sm break-all">
                    {emailAddress}
                  </code>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyEmail}
                    className="shrink-0"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                <DialogFooter>
                  <Button asChild>
                    <a href={`mailto:${emailAddress}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Open Email Client
                    </a>
                  </Button>
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <button className="group">
                  <Card className="border-0 bg-muted/30 hover:bg-muted/50 shadow-sm transition-colors h-full">
                    <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                      <span className="shrink-0 text-2xl group-hover:scale-110 transition-transform">
                        <FaEnvelope className="h-8 w-8" />
                      </span>
                      <span className="text-xs font-medium line-clamp-1">
                        {emailAddress}
                      </span>
                    </CardContent>
                  </Card>
                </button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{t("links.email")}</DrawerTitle>
                  <DrawerDescription>
                    {t("sections.links")} - Email
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center gap-2 p-4 bg-muted/50 rounded-lg">
                    <code className="flex-1 text-sm break-all">
                      {emailAddress}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyEmail}
                      className="shrink-0"
                    >
                      {copiedEmail ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
                <DrawerFooter>
                  <Button asChild>
                    <a href={`mailto:${emailAddress}`}>
                      <Mail className="h-4 w-4 mr-2" />
                      Open Email Client
                    </a>
                  </Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
