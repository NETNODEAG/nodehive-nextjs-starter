import { Logo } from '@/lib/icons';
import SocialMediaNavigation from './footer/social-media-navigation';

export default async function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto space-y-12 px-4 py-16 md:px-8">
        <div className="flex items-center justify-between ">
          <Logo className="h-[29px] max-w-[120px]" />

          <SocialMediaNavigation menuId="social-media" />
        </div>
      </div>
    </footer>
  );
}
