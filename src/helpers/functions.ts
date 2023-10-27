import { getRootLayout } from '@nativescript/core';
import { createNativeView } from 'nativescript-vue';
import { ANIMATION, SHADE_COVER, DIRECTION } from '~/helpers/constants';

/**
 * Generates the view of a component with the given props.
 *
 * @param component - The component to render.
 * @param direction - The direction you want the sheet to appear from,
 * @return The mounted Vue instance.
 */
const getView = (component: any, direction: DIRECTION) => {
  const nativeView = createNativeView(component, { direction: direction });
  nativeView.mount();
  return nativeView;
};

/**
 * Shows a sheet (default: entering from the bottom) using the specified component and props.
 * @param {any} component - The component to display in the sheet.
 * @param {DIRECTION} direction - The direction you want the sheet to appear from,
 */
export const showSheet = (component: any, direction: DIRECTION = 'bottom') => {
  // Get the root layout
  const rootLayout = getRootLayout();

  // Open the sheet with the specified component and props
  rootLayout.open(getView(component, direction).nativeView, {
    shadeCover: SHADE_COVER,
    animation: ANIMATION(direction),
  });
};
