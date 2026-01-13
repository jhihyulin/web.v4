import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SiBitcoin, SiEthereum, SiSolana, SiTon, SiSui } from "react-icons/si";

interface CryptoAddress {
  name: string;
  address: string;
  icon: React.ReactNode;
}

export function CryptoAddresses() {
  const { t } = useTranslation();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const addresses: CryptoAddress[] = [
    {
      name: t("crypto.bitcoin"),
      address: "bc1pse2ks9enzy24gujs29p0xy7rskct2snxm33vkpqg47m59syrcfvqwzpy0c",
      icon: <SiBitcoin className="h-6 w-6" />,
    },
    {
      name: t("crypto.evm"),
      address: "0xffc72cfb709c595db2d7a721b82da8bf2077a0f8",
      icon: <SiEthereum className="h-6 w-6" />,
    },
    {
      name: t("crypto.sui"),
      address:
        "0x5d8faa2abe5fe6cfdc76d67c6993812236b35c7d493e1e266bf911e3b357fc21",
      icon: <SiSui className="h-6 w-6" />,
    },
    {
      name: t("crypto.ton"),
      address: "UQCBOkBR63ss7jSmcSo-Bwpkkj-ffLpKsox2IAcr9L3XbPOy",
      icon: <SiTon className="h-6 w-6" />,
    },
    {
      name: t("crypto.solana"),
      address: "3ZmCBQeue15WzWm6bbt7fTbMMeeuN9f3haQ1rChZyajy",
      icon: <SiSolana className="h-6 w-6" />,
    },
  ];

  const copyToClipboard = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Card className="border-0 shadow-md bg-linear-to-br from-card to-card/50">
      <CardHeader>
        <h2 className="text-2xl font-semibold tracking-tight">
          {t("sections.crypto")}
        </h2>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2">
          {addresses.map((crypto) => (
            <Card
              key={crypto.name}
              className="overflow-hidden border-0 bg-muted/30 hover:bg-muted/50 shadow-sm transition-colors"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="shrink-0">{crypto.icon}</span>
                  <p className="text-sm font-semibold">{crypto.name}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <code className="flex-1 text-xs text-muted-foreground break-all bg-muted/50 rounded p-2">
                      {crypto.address}
                    </code>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(crypto.address)}
                      className="h-8 w-8 p-0 shrink-0 hover:bg-muted/50 transition-colors"
                      title={
                        copiedAddress === crypto.address
                          ? t("actions.copied")
                          : t("actions.copyAddress")
                      }
                    >
                      {copiedAddress === crypto.address ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
