import { useState } from "react";

import {
  HeaderContainer,
  HeaderInner,
  BrandLink,
  BrandName,
  BrandRole,
  DesktopNavigation,
  NavigationLink,
  HeaderCta,
  MobileMenuButton,
  MobileMenuIcon,
  MobileNavigation,
  MobileNavigationLink,
  MobileCta,
} from "./header.styles";

const navigationItems = [
  {
    id: "work",
    label: "Work",
    href: "#selected-work",
  },
  {
    id: "approach",
    label: "Approach",
    href: "#approach",
  },
  {
    id: "insights",
    label: "Insights",
    href: "#insights",
  },
  {
    id: "about",
    label: "About",
    href: "#about",
  },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <BrandLink href="#top" aria-label="Arnoldo Alvarez home">
          <BrandName>Arnoldo Alvarez</BrandName>
          <BrandRole>Product Engineer</BrandRole>
        </BrandLink>

        <DesktopNavigation aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <NavigationLink key={item.id} href={item.href}>
              {item.label}
            </NavigationLink>
          ))}

          <HeaderCta href="#contact">Let&apos;s Talk</HeaderCta>
        </DesktopNavigation>

        <MobileMenuButton
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <MobileMenuIcon $isOpen={isMenuOpen}>
            <span />
            <span />
          </MobileMenuIcon>
        </MobileMenuButton>
      </HeaderInner>

      <MobileNavigation $isOpen={isMenuOpen} aria-label="Mobile navigation">
        {navigationItems.map((item) => (
          <MobileNavigationLink
            key={item.id}
            href={item.href}
            onClick={handleNavigation}
          >
            {item.label}
          </MobileNavigationLink>
        ))}

        <MobileCta href="#contact" onClick={handleNavigation}>
          Let&apos;s Talk
        </MobileCta>
      </MobileNavigation>
    </HeaderContainer>
  );
};
