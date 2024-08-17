import { AppProvider } from '@toolpad/core/nextjs';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Navigation } from '@toolpad/core';
import theme from './theme';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'menu',
    title: 'Menu',
    icon: <LocalCafeIcon />,
  },
  {
    segment: 'qrcodegenerator',
    title: 'QrCodeGenerator',
    icon: <QrCodeIcon />,
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-toolpad-color-scheme="light">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProvider 
            theme={theme} 
            navigation={NAVIGATION}
            branding={{
              title: 'EventManagement',
            }}
            >
            {children}
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}