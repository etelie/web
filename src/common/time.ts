export const renderTimestamp = (timestamp: Date): string => {
  const locale = 'en-US';
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short',
  });
  const dateString: string = dateFormatter.format(timestamp);
  const timeString: string = timeFormatter.format(timestamp);

  return `${dateString} – ${timeString}`;
};
