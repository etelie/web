import { assert, describe, expect, test } from 'vitest';

import { renderTimestamp } from '@/common/time';

describe('common/time', () => {
  test.each([new Date('1995-12-17T03:24:00')])('renderTimestamp', (date: Date) => {
    expect(renderTimestamp(date, 'en-US')).toBe('December 17, 1995 – 3:24 AM CST');
  });
});
