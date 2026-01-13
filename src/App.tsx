import { LanguageSwitcher } from "@/components/language-switcher";
import { ProfileSection } from "@/components/profile-section";
import { SocialLinks } from "@/components/social-links";
import { CryptoAddresses } from "@/components/crypto-addresses";
import { ProjectsSection } from "@/components/projects-section";

function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted/20">
      <LanguageSwitcher />
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="space-y-6">
          <ProfileSection />
          <SocialLinks />
          <CryptoAddresses />
          <ProjectsSection />

          <footer className="mt-8 pt-6 text-center text-xs text-muted-foreground">
            <p>© 2026 Thomas Lin</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
