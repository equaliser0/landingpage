export default function slugify(input: string) {
  const lastDotIndex = input.lastIndexOf('.');

  // If there's a dot in the input and it's not the first or last character
  if (lastDotIndex > 0 && lastDotIndex < input.length - 1) {
    const fileName = input.substring(0, lastDotIndex); // Get the part before the last dot
    const fileExtension = input.substring(lastDotIndex + 1); // Get the part after the last dot

    const slugifiedFileName = fileName
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-');

    return `${slugifiedFileName}.${fileExtension}`;
  }

  // If there's no dot or it's at the beginning or end of the string, treat it as a regular case.
  return input
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '')
    .replace(/-+/g, '-');
}
