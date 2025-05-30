class Lunar {
  constructor(lunarYear, lunarMonth, lunarDay) {
    this.lunarYear = lunarYear;
    this.lunarMonth = lunarMonth;
    this.lunarDay = lunarDay;
  }
}

class Solar {
  constructor(solarYear, solarMonth, solarDay) {
    this.solarYear = solarYear;
    this.solarMonth = solarMonth;
    this.solarDay = solarDay;
  }
}

class LunarSolarConverter {
  static lunar_month_days = [
    1887, 0x1694, 0x16AA, 0x4AD5, 0xAB6, 0xC4B7, 0x4AE, 0xA56, 0xB52A, 0x1D2A,
    0xD54, 0x75AA, 0x156A, 0x1096D, 0x95C, 0x14AE, 0xAA4D, 0x1A4C, 0x1B2A, 0x8D55,
    0xAD4, 0x135A, 0x495D, 0x95C, 0xD49B, 0x149A, 0x1A4A, 0xBAA5, 0x16A8, 0x1AD4,
    0x52DA, 0x12B6, 0xE937, 0x92E, 0x1496, 0xB64B, 0xD4A, 0xDA8, 0x95B5, 0x56C,
    0x12AE, 0x492F, 0x92E, 0xCC96, 0x1A94, 0x1D4A, 0xADA9, 0xB5A, 0x56C, 0x726E,
    0x125C, 0xF92D, 0x192A, 0x1A94, 0xDB4A, 0x16AA, 0xAD4, 0x955B, 0x4BA, 0x125A,
    0x592B, 0x152A, 0xF695, 0xD94, 0x16AA, 0xAAB5, 0x9B4, 0x14B6, 0x6A57, 0xA56,
    0x1152A, 0x1D2A, 0xD54, 0xD5AA, 0x156A, 0x96C, 0x94AE, 0x14AE, 0xA4C, 0x7D26,
    0x1B2A, 0xEB55, 0xAD4, 0x12DA, 0xA95D, 0x95A, 0x149A, 0x9A4D, 0x1A4A, 0x11AA5,
    0x16A8, 0x16D4, 0xD2DA, 0x12B6, 0x936, 0x9497, 0x1496, 0x1564B, 0xD4A, 0xDA8,
    0xD5B4, 0x156C, 0x12AE, 0xA92F, 0x92E, 0xC96, 0x6D4A, 0x1D4A, 0x10D65, 0xB58,
    0x156C, 0xB26D, 0x125C, 0x192C, 0x9A95, 0x1A94, 0x1B4A, 0x4B55, 0xAD4, 0xF55B,
    0x4BA, 0x125A, 0xB92B, 0x152A, 0x1694, 0x96AA, 0x15AA, 0x12AB5, 0x974, 0x14B6,
    0xCA57, 0xA56, 0x1526, 0x8E95, 0xD54, 0x15AA, 0x49B5, 0x96C, 0xD4AE, 0x149C,
    0x1A4C, 0xBD26, 0x1AA6, 0xB54, 0x6D6A, 0x12DA, 0x1695D, 0x95A, 0x149A, 0xDA4B,
    0x1A4A, 0x1AA4, 0xBB54, 0x16B4, 0xADA, 0x495B, 0x936, 0xF497, 0x1496, 0x154A,
    0xB6A5, 0xDA4, 0x15B4, 0x6AB6, 0x126E, 0x1092F, 0x92E, 0xC96, 0xCD4A, 0x1D4A,
    0xD64, 0x956C, 0x155C, 0x125C, 0x792E, 0x192C, 0xFA95, 0x1A94, 0x1B4A, 0xAB55,
    0xAD4, 0x14DA, 0x8A5D, 0xA5A, 0x1152B, 0x152A, 0x1694, 0xD6AA, 0x15AA, 0xAB4,
    0x94BA, 0x14B6, 0xA56, 0x7527, 0xD26, 0xEE53, 0xD54, 0x15AA, 0xA9B5, 0x96C,
    0x14AE, 0x8A4E, 0x1A4C, 0x11D26, 0x1AA4, 0x1B54, 0xCD6A, 0xADA, 0x95C, 0x949D,
    0x149A, 0x1A2A, 0x5B25, 0x1AA4, 0xFB52, 0x16B4, 0xABA, 0xA95B, 0x936, 0x1496,
    0x9A4B, 0x154A, 0x136A5, 0xDA4, 0x15AC
  ];

  static solar_1_1 = [
    1887, 0xEC04C, 0xEC23F, 0xEC435, 0xEC649, 0xEC83E, 0xECA51, 0xECC46, 0xECE3A, 0xED04D,
    0xED242, 0xED436, 0xED64A, 0xED83F, 0xEDA53, 0xEDC48, 0xEDE3D, 0xEE050, 0xEE244, 0xEE439,
    0xEE64D, 0xEE842, 0xEEA36, 0xEEC4A, 0xEEE3E, 0xEF052, 0xEF246, 0xEF43A, 0xEF64E, 0xEF843,
    0xEFA37, 0xEFC4B, 0xEFE41, 0xF0054, 0xF0248, 0xF043C, 0xF0650, 0xF0845, 0xF0A38, 0xF0C4D,
    0xF0E42, 0xF1037, 0xF124A, 0xF143E, 0xF1651, 0xF1846, 0xF1A3A, 0xF1C4E, 0xF1E44, 0xF2038,
    0xF224B, 0xF243F, 0xF2653, 0xF2848, 0xF2A3B, 0xF2C4F, 0xF2E45, 0xF3039, 0xF324D, 0xF3442,
    0xF3636, 0xF384A, 0xF3A3D, 0xF3C51, 0xF3E46, 0xF403B, 0xF424E, 0xF4443, 0xF4638, 0xF484C,
    0xF4A3F, 0xF4C52, 0xF4E48, 0xF503C, 0xF524F, 0xF5445, 0xF5639, 0xF584D, 0xF5A42, 0xF5C35,
    0xF5E49, 0xF603E, 0xF6251, 0xF6446, 0xF663B, 0xF684F, 0xF6A43, 0xF6C37, 0xF6E4B, 0xF703F,
    0xF7252, 0xF7447, 0xF763C, 0xF7850, 0xF7A45, 0xF7C39, 0xF7E4D, 0xF8042, 0xF8254, 0xF8449,
    0xF863D, 0xF8851, 0xF8A46, 0xF8C3B, 0xF8E4F, 0xF9044, 0xF9237, 0xF944A, 0xF963F, 0xF9853,
    0xF9A47, 0xF9C3C, 0xF9E50, 0xFA045, 0xFA238, 0xFA44C, 0xFA641, 0xFA836, 0xFAA49, 0xFAC3D,
    0xFAE52, 0xFB047, 0xFB23A, 0xFB44E, 0xFB643, 0xFB837, 0xFBA4A, 0xFBC3F, 0xFBE53, 0xFC048,
    0xFC23C, 0xFC450, 0xFC645, 0xFC839, 0xFCA4C, 0xFCC41, 0xFCE36, 0xFD04A, 0xFD23D, 0xFD451,
    0xFD646, 0xFD83A, 0xFDA4D, 0xFDC43, 0xFDE37, 0xFE04B, 0xFE23F, 0xFE453, 0xFE648, 0xFE83C,
    0xFEA4F, 0xFEC44, 0xFEE38, 0xFF04C, 0xFF241, 0xFF436, 0xFF64A, 0xFF83E, 0xFFA51, 0xFFC46,
    0xFFE3A, 0x10004E, 0x100242, 0x100437, 0x10064B, 0x100841, 0x100A53, 0x100C48, 0x100E3C, 0x10104F,
    0x101244, 0x101438, 0x10164C, 0x101842, 0x101A35, 0x101C49, 0x101E3D, 0x102051, 0x102245, 0x10243A,
    0x10264E, 0x102843, 0x102A37, 0x102C4B, 0x102E3F, 0x103053, 0x103247, 0x10343B, 0x10364F, 0x103845,
    0x103A38, 0x103C4C, 0x103E42, 0x104036, 0x104249, 0x10443D, 0x104651, 0x104846, 0x104A3A, 0x104C4E,
    0x104E43, 0x105038, 0x10524A, 0x10543E, 0x105652, 0x105847, 0x105A3B, 0x105C4F, 0x105E45, 0x106039,
    0x10624C, 0x106441, 0x106635, 0x106849, 0x106A3D, 0x106C51, 0x106E47, 0x10703C, 0x10724F, 0x107444,
    0x107638, 0x10784C, 0x107A3F, 0x107C53, 0x107E48
  ];

  static GetBitInt(data, length, shift) {
    return (data & (((1 << length) - 1) << shift)) >> shift;
  }

  static SolarToInt(y, m, d) {
    m = (m + 9) % 12;
    y -= Math.floor(m / 10);
    return 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((m * 306 + 5) / 10) + (d - 1);
  }

  static SolarFromInt(g) {
    let y = Math.floor((10000 * g + 14780) / 3652425);
    let ddd = g - (365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400));
    if (ddd < 0) {
      y -= 1;
      ddd = g - (365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400));
    }
    let mi = Math.floor((100 * ddd + 52) / 3060);
    let mm = (mi + 2) % 12 + 1;
    y += Math.floor((mi + 2) / 12);
    let dd = ddd - Math.floor((mi * 306 + 5) / 10) + 1;
    return new Solar(y, mm, dd);
  }

  static LunarToSolar(lunar) {
    const days = LunarSolarConverter.lunar_month_days[lunar.lunarYear - LunarSolarConverter.lunar_month_days[0]];
    let offset = 0;
    for (let i = 0; i < lunar.lunarMonth - 1; i++) {
      offset += this.GetBitInt(days, 1, 12 - i) === 1 ? 30 : 29;
    }
    offset += lunar.lunarDay;

    const solar11 = LunarSolarConverter.solar_1_1[lunar.lunarYear - LunarSolarConverter.solar_1_1[0]];
    const y = this.GetBitInt(solar11, 12, 9);
    const m = this.GetBitInt(solar11, 4, 5);
    const d = this.GetBitInt(solar11, 5, 0);

    return this.SolarFromInt(this.SolarToInt(y, m, d) + offset - 1);
  }
}

async function getAuthToken() {
  const cached = await chrome.storage.local.get('authToken');
  if (cached.authToken) return cached.authToken;
  const token = await chrome.identity.getAuthToken({ interactive: true });
  await chrome.storage.local.set({ authToken: token.token });
  return token.token;
}

async function getSolarDate(year, month, day) {
  const cacheKey = `solar_${year}_${month}_${day}`;
  const cached = await chrome.storage.local.get(cacheKey);
  if (cached[cacheKey]) return cached[cacheKey];

  try {
    const lunar = new Lunar(parseInt(year), parseInt(month), parseInt(day));
    const solar = LunarSolarConverter.LunarToSolar(lunar);
    const solarDate = `${solar.solarYear}-${solar.solarMonth.toString().padStart(2, '0')}-${solar.solarDay.toString().padStart(2, '0')}`;
    await chrome.storage.local.set({ [cacheKey]: solarDate });
    return solarDate;
  } catch (error) {
    throw new Error('음력 날짜를 양력으로 변환하지 못했습니다: ' + error.message);
  }
}

async function addCalendarEvent(token, solarDate, eventName) {
  const event = {
    summary: eventName,
    start: { date: solarDate },
    end: { date: solarDate }
  };

  const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(event)
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(`캘린더 이벤트 추가에 실패했습니다: ${errorData.error.message}`);
  }
}

document.getElementById('addEvent').addEventListener('click', async () => {
  const month = document.getElementById('month').value;
  const day = document.getElementById('day').value;
  const eventName = document.getElementById('eventName').value;
  const yearsToAddInput = document.getElementById('yearsToAdd').value;
  const status = document.getElementById('status');

  // 입력값 검증
  let missingFields = [];
  if (!month) missingFields.push('음력 월');
  if (!day) missingFields.push('음력 일');
  if (!eventName) missingFields.push('이벤트 이름');
  if (!yearsToAddInput) missingFields.push('추가할 연도 수');
  if (missingFields.length > 0) {
    status.textContent = `${missingFields.join(', ')}을 입력해주세요.`;
    return;
  }

  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);
  const yearsToAddNum = parseInt(yearsToAddInput, 10);

  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    status.textContent = '음력 월은 1에서 12 사이로 입력해주세요.';
    return;
  }
  if (isNaN(dayNum) || dayNum < 1 || dayNum > 30) {
    status.textContent = '음력 일은 1에서 30 사이로 입력해주세요.';
    return;
  }
  if (isNaN(yearsToAddNum) || yearsToAddNum < 1 || yearsToAddNum > 50) {
    status.textContent = '추가할 연도 수는 1에서 50 사이로 입력해주세요.';
    return;
  }

  const paddedMonth = monthNum.toString().padStart(2, '0');
  const paddedDay = dayNum.toString().padStart(2, '0');

  // 연도 배열 생성
  const currentYear = new Date().getFullYear();
  const endYear = currentYear + yearsToAddNum;
  const yearsToAdd = Array.from({ length: yearsToAddNum }, (_, i) => currentYear + i);

  status.textContent = `${currentYear}년부터 ${endYear}년까지 이벤트를 추가하는 중...`;

  try {
    const token = await getAuthToken();

    // 음력 날짜 저장
    await chrome.storage.local.set({
      lunarBirthday: { month: paddedMonth, day: paddedDay, eventName }
    });

    // 병렬로 이벤트 추가
    const results = await Promise.all(
      yearsToAdd.map(async (year) => {
        const solarDate = await getSolarDate(year.toString(), paddedMonth, paddedDay);
        await addCalendarEvent(token, solarDate, eventName);
        return `${year}년: ${solarDate}`;
      })
    );

    // 이전 형식으로 결과 표시
    status.textContent = `음력 ${month}월 ${day}일에 해당하는 양력 날짜가 캘린더에 추가되었습니다:\n${results.join('\n')}`;
  } catch (error) {
    status.textContent = error.message.includes('Failed to fetch')
      ? '인터넷 연결을 확인해주세요.'
      : error.message;
    console.error(error);
  }
});