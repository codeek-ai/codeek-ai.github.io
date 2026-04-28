export interface App {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  screenGradient: string;
  features: string[];
  details: string[];
  privacyDate: string;
  packageName?: string;
  metaDescription: string;
}

export const apps: App[] = [
  {
    id: 'math-sprint',
    name: 'Math Sprint',
    tagline: 'Fast offline arithmetic & memory practice',
    description:
      'Fast offline practice app built for short daily sessions. Helps players train arithmetic and memory skills through quick rounds that are easy to start, replay, and track over time.',
    category: 'Education',
    gradientFrom: '#0e8a6a',
    gradientTo: '#f29f05',
    accentColor: '#f29f05',
    screenGradient: 'linear-gradient(145deg, #0e8a6a 0%, #f29f05 100%)',
    features: [
      'Arithmetic practice with multiple modes',
      'Memory rounds for short recall training',
      'Easy, medium, and hard difficulty levels',
      'Timed rounds with score, combo, and speed feedback',
      'Daily challenge, local leaderboard, and personal progress',
    ],
    details: [
      'Works offline',
      'No account required',
      'Built for quick daily use',
      'Part of the Codeek portfolio',
    ],
    privacyDate: 'April 4, 2026',
    packageName: 'com.enesk6u.mathsprint',
    metaDescription:
      'Math Sprint is an offline mobile app for arithmetic and memory practice with daily challenges, local progress, and quick replayable rounds.',
  },
  {
    id: 'codeek-camera',
    name: 'Codeek Camera',
    tagline: 'GPS camera with proof-ready location capture',
    description:
      'Modern GPS camera app for people who need photos with live location context. Designed for personal memories and professional proof-of-location workflows.',
    category: 'Camera Utility',
    gradientFrom: '#f4b942',
    gradientTo: '#ff6b57',
    accentColor: '#f4b942',
    screenGradient: 'linear-gradient(145deg, #f4b942 0%, #ff6b57 100%)',
    features: [
      'Live camera preview with front and back camera switching',
      'GPS coordinates and reverse-geocoded address details',
      'Current date and time metadata',
      'Save photos to gallery and access them in-app',
      'Built for field work, inspections, and documentation',
    ],
    details: [
      'Camera-first workflow',
      'Professional proof-of-location',
      'Designed for field and travel use',
      'Part of the Codeek portfolio',
    ],
    privacyDate: 'April 10, 2026',
    metaDescription:
      'Codeek Camera is a GPS camera app for photos with live location, address, timestamp, and proof-ready capture.',
  },
  {
    id: 'codeek-map',
    name: 'Codeek Map',
    tagline: 'Save places, draw routes & export map data',
    description:
      'Practical map tool for saving important places, organizing route ideas, and keeping field notes close to the map in a clean, map-first workflow.',
    category: 'Map Tool',
    gradientFrom: '#2f9e7c',
    gradientTo: '#2b7fff',
    accentColor: '#2b7fff',
    screenGradient: 'linear-gradient(145deg, #2f9e7c 0%, #2b7fff 100%)',
    features: [
      'Save markers with titles, notes, and coordinates',
      'Attach photos to saved markers',
      'Draw routes with waypoint support',
      'Outline areas directly on the map',
      'Search by place name, address, or coordinates',
      'Export marker and route data in CSV or JSON',
    ],
    details: [
      'Local-first storage',
      'Built for planning and field notes',
      'No account required',
      'Part of the Codeek portfolio',
    ],
    privacyDate: 'April 4, 2026',
    metaDescription:
      'Codeek Map is a map tool for saving places, adding photos, drawing routes, and exporting map data.',
  },
  {
    id: 'qr-and-barcode',
    name: 'QR and Barcode',
    tagline: 'Fast scanner with history & QR creation',
    description:
      'Fast scanner app built for everyday use. Helps users scan codes, understand content instantly, take the next action quickly, and create their own QR codes.',
    category: 'Scanner Utility',
    gradientFrom: '#0e8b7d',
    gradientTo: '#ff6b57',
    accentColor: '#0e8b7d',
    screenGradient: 'linear-gradient(145deg, #0e8b7d 0%, #ff6b57 100%)',
    features: [
      'Scans QR codes and major barcode formats',
      'Detects links, Wi-Fi, contacts, phone, email, SMS, maps, and plain text',
      'Open, copy, or share scan results instantly',
      'Local history with search and filters',
      'Creates QR codes for common use cases from guided forms',
    ],
    details: [
      'Privacy-first local storage',
      'No account required',
      'Designed for quick everyday actions',
      'Part of the Codeek portfolio',
    ],
    privacyDate: 'March 29, 2026',
    metaDescription:
      'QR and Barcode is a fast scanner app with smart actions, local history, and QR code creation.',
  },
];

export function getApp(id: string): App | undefined {
  return apps.find((a) => a.id === id);
}
