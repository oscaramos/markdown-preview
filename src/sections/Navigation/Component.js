import React from "react";

import AppBar from "sections/AppBar";
import Menu from "sections/Menu";

import { useStore } from "../../store";

function Navigation() {
  const { state, actions } = useStore();
  const isMenuOpen = state.drawer.open;

  const onMenuToggle = () => {
    actions.drawer.toggle();
  };

  const handleMenuOpen = () => {
    actions.drawer.setDrawerOpen(true);
  };

  const handleMenuClose = () => {
    actions.drawer.setDrawerOpen(false);
  };

  return (
    <>
      <Menu
        isOpen={isMenuOpen}
        onClose={handleMenuClose}
        onOpen={handleMenuOpen}
      />
      <AppBar isMenuOpen={isMenuOpen} onMenuToggle={onMenuToggle} />
    </>
  );
}

export default Navigation;
