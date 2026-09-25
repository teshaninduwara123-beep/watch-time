const BASE = "https://api.themoviedb.org/3";
export default async function handler(req,res){
  const key=process.env.TMDB_API_KEY;
  if(!key) return res.status(500).json({error:"TMDB_API_KEY is not configured"});
  const path=req.query.path;
  if(!path) return res.status(400).json({error:"Missing path"});
  const url=BASE+path+(path.includes("?")?"&":"?")+"api_key="+encodeURIComponent(key);
  const r=await fetch(url); const data=await r.json();
  res.status(r.status).json(data);
}
