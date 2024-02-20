import HeaderLogo from './header/header-logo';
import HeaderNavigation from './header/header-navigation';

export default async function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-8 md:px-8">
        <HeaderLogo />

        <HeaderNavigation menuId="green-bowl-lille-mainnavigation" />
      </div>
    </header>
  );
}
