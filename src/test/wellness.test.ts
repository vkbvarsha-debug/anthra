import { describe, it, expect } from 'vitest';
import { gratitudeToEntry } from '@/lib/wellness';
describe('Optional gratitude',()=>{
 it('allows all gratitude prompts to be skipped',()=>{expect(gratitudeToEntry(['','',''],false)).toBe('');});
 it('records at most three gratitude answers',()=>{expect(gratitudeToEntry(['one','two','three','four'],false)).toBe('one\ntwo\nthree');});
 it('allows a difficult day without a gratitude answer',()=>{expect(gratitudeToEntry([],true)).toBe("Today was difficult, and that's okay.");});
});
