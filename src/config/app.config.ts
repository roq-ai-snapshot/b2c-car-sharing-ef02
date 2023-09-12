interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Fleet Manager', 'Admin'],
  tenantName: 'Company',
  applicationName: 'B2C Car sharing v3',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View available cars near location', 'Book a car', 'Cancel a booking', 'Update booking details'],
  ownerAbilities: [
    'Manage company',
    'Invite Fleet Manager',
    'Invite Admin',
    'Manage cars',
    'Manage users',
    'View available cars',
    'Book a car',
    'Cancel booking',
    'Update booking details',
  ],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/af187cc3-cf4d-4918-965c-2ee8d7666234',
};
