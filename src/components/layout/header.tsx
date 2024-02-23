import HeaderCallToAction from './header-call-to-action';
import HeaderLogo from './header-logo';
import HeaderNavigation from './header-navigation';

export default async function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <HeaderLogo />

        <HeaderNavigation menuId="green-bowl-lille-mainnavigation" />

        <HeaderCallToAction />
      </div>
    </header>
  );
}
