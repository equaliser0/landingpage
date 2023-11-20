export interface AppSettings {
  appName: string;
  headline?: string;
  logoURL?: string;
  headerImageURL?: string;
  apiURL: string;
  contactEmail: string;
  contactPhone?: string;
  facebookURL?: string;
  twitterURL?: string;
  linkedinURL?: string;
  instagramURL?: string;
  youtubeURL?: string;
  defaultLanguage?: string;
  defaultTheme?: string;
  defaultCurrency?: string;
  allowUserRegistration?: boolean;
  allowPasswordReset?: boolean;
  emailSMTPServer?: string;
  emailSenderAddress?: string;
  privacyPolicyURL?: string;
  termsOfServiceURL?: string;
  googleAnalyticsID?: string;
  customCSSURL?: string;
  // Add other application-specific properties as needed
}
