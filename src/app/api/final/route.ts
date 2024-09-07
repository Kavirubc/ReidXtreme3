import { NextResponse } from 'next/server';
import axios from 'axios';

async function getResponse(url: string) {
  const headers = {
    'accept': 'application/json', // Changed to explicitly request JSON
    'accept-encoding': 'gzip, deflate, br',
    'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'cache-control': 'no-cache',
    'cookie': 'referrer=https://www.google.com/; homepage_variant=https://www.hackerrank.com/; fileDownload=true; hackerrankx_mixpanel_token=d33ea07c-fc7c-43db-b8ee-276a064433a3; user_type=hacker; hrc_l_i=T; _hrank_session=5b8c7728877dc24a821c126698b0a039; hackerrank_mixpanel_token=1b176792-6999-4d62-bcaf-9c143ded39ce; hacker_editor_theme=light; noi-2024-feb_crp=nil; optimizelyEndUserId=oeu1714022512590r0.9449920818471698; optimizelyBuckets=%7B%7D; noi-2024-april-monthly-contest_crp=nil; noi-2024-april_crp=nil; show_cookie_banner=false; noi-2024_crp=nil; session_referrer=https%3A%2F%2Fwww.google.com%2F; session_referring_domain=www.google.com; user_theme=dark; h_r=internal-search; h_l=_default; h_v=_default; noi-2024-qualifier-round_crp=nil; global_popup-close__fairness=true; noi-2024-day-1_crp=nil; noi-2024-day-2_crp=nil; infiniteloop-dsa_crp=nil; ieeextreme-challenges_crp=nil; optimizelySegments=%7B%221709580323%22%3A%22false%22%2C%221717251348%22%3A%22gc%22%2C%221719390155%22%3A%22search%22%2C%222308790558%22%3A%22none%22%7D; react_var=true__trm4; react_var2=true__trm4; acm-8-weeks-of-code-week-05_crp=nil; acm-8-weeks-of-code-week-04_crp=nil; acm-8-weeks-of-code-week-01_crp=nil; acm-8-weeks-of-code-week-02_crp=nil; acm-8-weeks-of-code-week-03_crp=nil; aces-coders-v7_crp=nil; aces-coders-v9_crp=nil; aces-coders-v-10-0_crp=nil; session_landing_url=https%3A%2F%2Fwww.hackerrank.com%2Faces-coders-v-10-0; _fcdscst=MTcyNDQwNDIzNTEzNw==; reidextreme-dummy_crp=nil; reidxtreme3-initial-round_crp=nil; web_browser_id=f68a270a0a9b2dbe027f31a9c42c840b; noi-2024-march_crp=nil; __utmc=74197771; __utmz=74197771.1724505848.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); _biz_uid=cca415eddfc84459d1c978a249bd8332; _biz_flagsA=%7B%22Version%22%3A1%2C%22ViewThrough%22%3A%221%22%7D; _biz_nA=2; _biz_pendingA=%5B%22ipv%3F_biz_r%3Dhttps%253A%252F%252Fwww.hackerrank.com%252Fcontests%252Freidxtreme3-initial-round%252Fleaderboard%26_biz_h%3D898650037%26_biz_u%3Dcca415eddfc84459d1c978a249bd8332%26_biz_l%3Dhttps%253A%252F%252Fwww.hackerrank.com%252Fcontests%252Freidxtreme3-initial-round%252Fcompare%252Flakshith_k_nish1%252Fksicoders%26_biz_t%3D1724505848399%26_biz_i%3DCompare%2520%257C%2520HackerRank%26_biz_n%3D0%26rnd%3D172946%22%2C%22ipv%3F_biz_r%3Dhttps%253A%252F%252Fwww.hackerrank.com%252Fcontests%252Freidxtreme3-initial-round%252Fleaderboard%26_biz_h%3D898650037%26_biz_u%3Dcca415eddfc84459d1c978a249bd8332%26_biz_l%3Dhttps%253A%252F%252Fwww.hackerrank.com%252Fcontests%252Freidxtreme3-initial-round%252Fcompare%252Flakshith_k_nish1%252Fksicoders%26_biz_t%3D1724515254320%26_biz_i%3DCompare%2520%257C%2520HackerRank%26_biz_n%3D1%26rnd%3D352554%22%5D; __utma=74197771.162929975.1724505848.1724505848.1724515255.2; session_id=t24gvlys-1724657800403; metrics_user_identifier=563f96-9435f4ec10c3ab22e6db34ddc7ade0a7a51cf0c3',
    'dnt': '1',
    'pragma': 'no-cache',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36'
  };

  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    console.error('Error in getResponse:', error);
    throw error;
  }
}

function processData(responses: any[]) {
  const scoresByTeam: { [key: string]: { [key: string]: [number, number] } } = {};
  
  for (const response of responses) {
    const team = response.hacker_username;
    const challenge = response.challenge.slug;
    const score = response.score;
    const time = Math.floor(new Date(response.inserttime).getTime() / 1000); // Convert to Unix timestamp

    if (!scoresByTeam[team]) scoresByTeam[team] = {};
    if (!scoresByTeam[team][challenge]) scoresByTeam[team][challenge] = [0, 0];

    if (score > scoresByTeam[team][challenge][0]) {
      scoresByTeam[team][challenge] = [score, time];
    }
  }

  const totalScoresByTeam: { [key: string]: [number, number] } = {};

  for (const [team, challenges] of Object.entries(scoresByTeam)) {
    const totalScore = Object.values(challenges).reduce((sum, [score]) => sum + score, 0);
    const totalTime = Object.values(challenges).reduce((sum, [, time]) => sum + time, 0);
    totalScoresByTeam[team] = [totalScore, totalTime];
  }

  const sortedTeams = Object.entries(totalScoresByTeam)
    .sort(([, a], [, b]) => b[0] - a[0] || a[1] - b[1])
    .map(([team, [totalScore, totalTime]], index) => ({
      rank: index + 1,
      team,
      totalScore,
      totalTime,
    }));

  return sortedTeams;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const timestamp = searchParams.get('t') || Date.now();
    const url = `https://www.hackerrank.com/rest/contests/reidxtreme3-final-round/judge_submissions/?offset=0&limit=100000&_=${timestamp}`;
    const data = await getResponse(url);
    if (!data || !data.models) {
      console.error('Invalid data received:', data);
      throw new Error('Invalid data received from HackerRank API');
    }
    const leaderboard = processData(data.models);
    return NextResponse.json(leaderboard);
  } catch (error: unknown) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json({ error: 'Failed to fetch leaderboard', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}