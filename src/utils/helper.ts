import { Capacitor } from '@capacitor/core';

// currently use for generate
export function generateRandomName(format: string) {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(15).substring(7); // Generate a random string

  return format
    ? `${timestamp}_${randomString}.${format}`
    : `${timestamp}_${randomString}`;
}

/**
 * Fixes the image path for Android devices during development.
 * Replaces 'localhost' with the appropriate site root URL.
 * @param croppedImage
 * @returns
 */
export function replaceLocalhostWithSiteRoot(croppedImage: string): string {
  let imageSrc = croppedImage;
  if (
    imageSrc &&
    process.env.NODE_ENV !== 'production' &&
    Capacitor.getPlatform() === 'android'
  ) {
    if (imageSrc.includes('localhost')) {
      imageSrc = imageSrc.replace(
        /http\:\/\/localhost\:\d+/,
        process.env.SITE_ROOT
      );
    }
  }

  return imageSrc;
}
