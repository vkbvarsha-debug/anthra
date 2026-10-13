import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { toast } from 'sonner';
import type { Entry, Checkin } from '@/lib/wellness';
type Data = { entries: Entry[]; checkins: Checkin[]; reminders: boolean };
const empty: Data = {entries:[],checkins:[],reminders:true};
const WellnessContext = createContext<{data:Data; update:(fn:(d:Data)=>Data)=>void; ready:boolean} | null>(null);
export function WellnessProvider({children}:{children:ReactNode}) {
 const [data,setData]=useState<Data>(empty); const [ready,setReady]=useState(false);
 useEffect(()=>{try { const raw=localStorage.getItem('anthara-private'); if(raw) { const parsed=JSON.parse(raw); if(Array.isArray(parsed.entries)&&Array.isArray(parsed.checkins)) setData({...empty,...parsed}); } }catch { toast.error('Your saved reflections could not be opened.'); } setReady(true);},[]);
 function update(fn:(d:Data)=>Data) { setData(old=>{const next=fn(old);try{localStorage.setItem('anthara-private',JSON.stringify(next));}catch{toast.error('This browser could not save your reflection. Please keep a separate copy.');}return next;}); }
 return <WellnessContext.Provider value={{data,update,ready}}>{children}</WellnessContext.Provider>;
}
export function useWellness(){const c=useContext(WellnessContext);if(!c)throw new Error('Wellness provider required');return c;}
