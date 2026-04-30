export interface Project {
  id: string;
  name: string;
  category: 'bar' | 'ktv';
  region?: string;
  province?: string;
  imageUrl?: string;
  videoUrl?: string;
  douyinUrl?: string;
}

const BAR_IMAGES = [
  'https://images.unsplash.com/photo-1514525253361-ec63a4e1a729?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1574091237482-bfff47019cba?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=500',
];

const KTV_IMAGES = [
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1514513682-628d6f0a4023?auto=format&fit=crop&q=80&w=500',
  'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=500',
];

export const projects: Project[] = [
  // --- 云南省 (Yunnan) ---
  { id: 'yn-1', name: '云南普洱H98.酒吧', category: 'bar', region: '普洱', province: '云南', imageUrl: BAR_IMAGES[0] },
  { id: 'yn-2', name: '云南瑞丽懿诚娱乐', category: 'bar', region: '瑞丽', province: '云南', imageUrl: BAR_IMAGES[1], videoUrl: 'https://player.mux.com/wjuKBAzVlqw4aQsnwxqIO4ealuW02t6iz7QE38ogm6GA' },
  { id: 'yn-3', name: '云南昭通亿瓦酒吧', category: 'bar', region: '昭通', province: '云南', imageUrl: BAR_IMAGES[2], videoUrl: '/videos/云南昭通亿瓦酒吧.mp4' },
  { id: 'yn-4', name: '云南瑞丽约克王朝', category: 'bar', region: '瑞丽', province: '云南', imageUrl: BAR_IMAGES[3], videoUrl: '/videos/云南瑞丽约克王朝.mp4' },
  { id: 'yn-5', name: '云南腾冲 叶 live house', category: 'bar', region: '腾冲', province: '云南', imageUrl: BAR_IMAGES[0], videoUrl: '/videos/云南腾冲 叶 live house.mp4' },
  { id: 'yn-6', name: '云南嵩明7M酒吧', category: 'bar', region: '嵩明', province: '云南', imageUrl: BAR_IMAGES[1], videoUrl: '/videos/云南嵩明7M酒吧.mp4' },
  { id: 'yn-7', name: '云南镇雄985club', category: 'bar', region: '镇雄', province: '云南', imageUrl: BAR_IMAGES[2], videoUrl: '/videos/云南镇雄985club.mp4' },
  { id: 'yn-8', name: '云南丽江红馆酒吧', category: 'bar', region: '丽江', province: '云南', imageUrl: BAR_IMAGES[3], videoUrl: '/videos/云南丽江红馆酒吧.mp4' },
  { id: 'yn-9', name: '云南会泽将进酒电音剧场', category: 'bar', region: '会泽', province: '云南', imageUrl: BAR_IMAGES[0] },
  { id: 'yn-10', name: '云南昆明南live house', category: 'bar', region: '昆明', province: '云南', imageUrl: BAR_IMAGES[1], videoUrl: 'https://player.mux.com/fQYuHGZkKF5qsYENnHAH800KSP47EXXyPN7vI7QUOAJ8' },
  { id: 'yn-11', name: '云南丽江后街五号酒吧', category: 'bar', region: '丽江', province: '云南', imageUrl: BAR_IMAGES[2] },
  { id: 'yn-12', name: '云南丘北CBD酒吧', category: 'bar', region: '丘北', province: '云南', imageUrl: BAR_IMAGES[3] },
  { id: 'yn-13', name: '云南昆明范Kunming Fan', category: 'bar', region: '昆明', province: '云南', imageUrl: BAR_IMAGES[0] },
  { id: 'yn-14', name: '云南昭通南live house', category: 'bar', region: '昭通', province: '云南', imageUrl: BAR_IMAGES[1] },
  { id: 'yn-15', name: '云南普洱MOTION', category: 'bar', region: '普洱', province: '云南', imageUrl: BAR_IMAGES[2] },
  { id: 'yn-16', name: '云南昆明觉宴', category: 'bar', region: '昆明', province: '云南', imageUrl: BAR_IMAGES[3] },
  { id: 'yn-17', name: '云南大理EVOLUTION跳舞俱乐部', category: 'bar', region: '大理', province: '云南', imageUrl: BAR_IMAGES[0] },
  { id: 'yn-18', name: '云南芒市live house', category: 'bar', region: '芒市', province: '云南', imageUrl: BAR_IMAGES[1] },
  { id: 'yn-19', name: '云南曲靖UNNIGHT SHOW', category: 'bar', region: '曲靖', province: '云南', imageUrl: BAR_IMAGES[2] },
  { id: 'yn-20', name: '云南昆明云纺鲲super live', category: 'bar', region: '昆明', province: '云南', imageUrl: BAR_IMAGES[3] },
  { id: 'yn-21', name: '云南昆明CNC酒吧', category: 'bar', region: '昆明', province: '云南', imageUrl: BAR_IMAGES[0] },
  { id: 'yn-22', name: 'SPAGE丽江店', category: 'bar', region: '丽江', province: '云南', imageUrl: BAR_IMAGES[1] },

  // --- 四川、重庆 (Sichuan & Chongqing) ---
  { id: 'sc-1', name: '四川南充SPACE', category: 'bar', region: '南充', province: '四川', imageUrl: BAR_IMAGES[0] },
  { id: 'sc-2', name: '四川成都UT酒吧', category: 'bar', region: '成都', province: '四川', imageUrl: BAR_IMAGES[1] },
  { id: 'sc-3', name: '四川隆昌BBC酒吧', category: 'bar', region: '隆昌', province: '四川', imageUrl: BAR_IMAGES[2] },
  { id: 'sc-4', name: '四川成都T61', category: 'bar', region: '成都', province: '四川', imageUrl: BAR_IMAGES[3] },
  { id: 'sc-5', name: '四川成都play house', category: 'bar', region: '成都', province: '四川', imageUrl: BAR_IMAGES[0] },
  { id: 'sc-6', name: '四川会东K酒吧', category: 'bar', region: '会东', province: '四川', imageUrl: BAR_IMAGES[1] },
  { id: 'sc-7', name: '广安SPACE', category: 'bar', region: '广安', province: '四川', imageUrl: BAR_IMAGES[2] },
  { id: 'sc-8', name: '成都Playhouse顶级派对空间', category: 'bar', region: '成都', province: '四川', imageUrl: BAR_IMAGES[3] },
  { id: 'cq-1', name: '重庆空瓶子', category: 'bar', region: '重庆', province: '重庆', imageUrl: BAR_IMAGES[0] },
  { id: 'cq-2', name: '重庆T61', category: 'bar', region: '重庆', province: '重庆', imageUrl: BAR_IMAGES[1] },
  { id: 'cq-3', name: '荣昌SPACE', category: 'bar', region: '荣昌', province: '重庆', imageUrl: BAR_IMAGES[2] },
  { id: 'cq-4', name: '重庆Playhouse顶级派对空间', category: 'bar', region: '重庆', province: '重庆', imageUrl: BAR_IMAGES[3] },
  { id: 'cq-5', name: 'SPACE重庆店', category: 'bar', region: '重庆', province: '重庆', imageUrl: BAR_IMAGES[0] },

  // --- 广东 (Guangdong) ---
  { id: 'gd-1', name: '广东深圳012派对空间', category: 'bar', region: '深圳', province: '广东', imageUrl: BAR_IMAGES[0] },
  { id: 'gd-2', name: '广东广州白云G5红live show', category: 'bar', region: '广州', province: '广东', imageUrl: BAR_IMAGES[1] },
  { id: 'gd-3', name: '广东广州808club', category: 'bar', region: '广州', province: '广东', imageUrl: BAR_IMAGES[2] },
  { id: 'gd-4', name: '广东佛山金沙洲红live show', category: 'bar', region: '佛山', province: '广东', imageUrl: BAR_IMAGES[3] },
  { id: 'gd-5', name: '广东佛山桂城MIX', category: 'bar', region: '佛山', province: '广东', imageUrl: BAR_IMAGES[0] },
  { id: 'gd-6', name: '广东佛山桂城红livehouse', category: 'bar', region: '佛山', province: '广东', imageUrl: BAR_IMAGES[1] },
  { id: 'gd-7', name: '广东惠州西海岸酒吧', category: 'bar', region: '惠州', province: '广东', imageUrl: BAR_IMAGES[2] },
  { id: 'gd-8', name: '广东湛江红馆·PARK', category: 'bar', region: '湛江', province: '广东', imageUrl: BAR_IMAGES[3] },
  { id: 'gd-9', name: '广东潮州Super E', category: 'bar', region: '潮州', province: '广东', imageUrl: BAR_IMAGES[0] },
  { id: 'gd-10', name: '深圳SPACE', category: 'bar', region: '深圳', province: '广东', imageUrl: BAR_IMAGES[1] },

  // --- 浙江、江苏、其他华东地区 ---
  { id: 'zj-1', name: '浙江海宁·潘多拉酒吧', category: 'bar', region: '海宁', province: '浙江', imageUrl: BAR_IMAGES[0] },
  { id: 'zj-2', name: '浙江水·丽Livehouse', category: 'bar', region: '浙江', province: '浙江', imageUrl: BAR_IMAGES[1] },
  { id: 'zj-3', name: '浙江杭州N99', category: 'bar', region: '杭州', province: '浙江', imageUrl: BAR_IMAGES[2] },
  { id: 'zj-4', name: '浙江嘉兴·十二兽龙酒吧', category: 'bar', region: '嘉兴', province: '浙江', imageUrl: BAR_IMAGES[3] },
  { id: 'zj-5', name: '浙江温州AISUPERCLUB', category: 'bar', region: '温州', province: '浙江', imageUrl: BAR_IMAGES[0] },
  { id: 'zj-6', name: '桐乡SPACE', category: 'bar', region: '桐乡', province: '浙江', imageUrl: BAR_IMAGES[1] },
  { id: 'js-1', name: '扬州奥斯卡OSCAR', category: 'bar', region: '扬州', province: '江苏', imageUrl: BAR_IMAGES[2] },
  { id: 'js-2', name: '淮安SPACE', category: 'bar', region: '淮安', province: '江苏', imageUrl: BAR_IMAGES[3] },
  { id: 'js-3', name: '江苏南京·晓Livehouse', category: 'bar', region: '南京', province: '江苏', imageUrl: BAR_IMAGES[0] },
  { id: 'js-4', name: 'SPACE常熟店', category: 'bar', region: '常熟', province: '江苏', imageUrl: BAR_IMAGES[1] },

  // --- 华中、西北、东北、其他 ---
  { id: 'sx-1', name: '陕西西安playhouse', category: 'bar', region: '西安', province: '陕西', imageUrl: BAR_IMAGES[2] },
  { id: 'sx-2', name: '陕西西安空瓶子', category: 'bar', region: '西安', province: '陕西', imageUrl: BAR_IMAGES[3] },
  { id: 'sx-3', name: '陕西汉中-汉super live', category: 'bar', region: '汉中', province: '陕西', imageUrl: BAR_IMAGES[0] },
  { id: 'sx-4', name: '西安Playhouse顶级派对空间', category: 'bar', region: '西安', province: '陕西', imageUrl: BAR_IMAGES[1] },
  { id: 'sd-1', name: '临沂奥斯卡', category: 'bar', region: '临沂', province: '山东', imageUrl: BAR_IMAGES[2] },
  { id: 'sd-2', name: '青岛奥斯卡', category: 'bar', region: '青岛', province: '山东', imageUrl: BAR_IMAGES[3] },
  { id: 'sd-3', name: '泰安奥斯卡', category: 'bar', region: '泰安', province: '山东', imageUrl: BAR_IMAGES[0] },
  { id: 'sd-4', name: '山东临沂奥斯卡', category: 'bar', region: '临沂', province: '山东', imageUrl: BAR_IMAGES[1] },
  { id: 'sd-5', name: '山东潍坊BACK U', category: 'bar', region: '潍坊', province: '山东', imageUrl: BAR_IMAGES[2] },
  { id: 'sd-6', name: '山东济南赤道Live house', category: 'bar', region: '济南', province: '山东', imageUrl: BAR_IMAGES[3] },
  { id: 'sd-7', name: '山东济南1001', category: 'bar', region: '济南', province: '山东', imageUrl: BAR_IMAGES[0] },
  { id: 'hn-1', name: '洛阳奥斯卡', category: 'bar', region: '洛阳', province: '河南', imageUrl: BAR_IMAGES[1] },
  { id: 'hn-2', name: 'SPACE郑州店', category: 'bar', region: '郑州', province: '河南', imageUrl: BAR_IMAGES[2] },
  { id: 'gz-1', name: '毕节SPACE', category: 'bar', region: '毕节', province: '贵州', imageUrl: BAR_IMAGES[3] },
  { id: 'gz-2', name: '贵州贵阳楽 Live house', category: 'bar', region: '贵阳', province: '贵州', imageUrl: BAR_IMAGES[0] },
  { id: 'gz-3', name: '贵阳Playhouse顶级派对空间', category: 'bar', region: '贵阳', province: '贵州', imageUrl: BAR_IMAGES[1] },
  { id: 'jx-1', name: '南昌SPACE', category: 'bar', region: '南昌', province: '江西', imageUrl: BAR_IMAGES[2] },
  { id: 'qh-1', name: '西宁SPACE', category: 'bar', region: '西宁', province: '青海', imageUrl: BAR_IMAGES[3] },
  { id: 'qh-2', name: '青海西宁无界酒吧', category: 'bar', region: '西宁', province: '青海', imageUrl: BAR_IMAGES[0] },
  { id: 'nm-1', name: '海拉尔SPACE', category: 'bar', region: '海拉尔', province: '内蒙古', imageUrl: BAR_IMAGES[1] },
  { id: 'bj-1', name: '北京空瓶子', category: 'bar', region: '北京', province: '北京', imageUrl: BAR_IMAGES[2] },
  { id: 'hun-1', name: '湖南长沙空瓶子', category: 'bar', region: '长沙', province: '湖南', imageUrl: BAR_IMAGES[3] },
  { id: 'hun-2', name: '湖南株洲十二兽', category: 'bar', region: '株洲', province: '湖南', imageUrl: BAR_IMAGES[0] },
  { id: 'hun-3', name: '长沙Playhouse顶级派对空间', category: 'bar', region: '长沙', province: '湖南', imageUrl: BAR_IMAGES[1] },
  { id: 'hub-1', name: '湖北武汉空瓶子', category: 'bar', region: '武汉', province: '湖北', imageUrl: BAR_IMAGES[2] },
  { id: 'hub-2', name: 'SPACE武汉店', category: 'bar', region: '武汉', province: '湖北', imageUrl: BAR_IMAGES[3] },
  { id: 'hi-1', name: '海南海口T1', category: 'bar', region: '海口', province: '海南', imageUrl: BAR_IMAGES[0] },
  { id: 'xj-1', name: '新疆乌鲁木齐T61', category: 'bar', region: '乌鲁木齐', province: '新疆', imageUrl: BAR_IMAGES[1] },
  { id: 'jl-1', name: '吉林通化K5潮流派对空间', category: 'bar', region: '通化', province: '吉林', imageUrl: BAR_IMAGES[2] },
  { id: 'tj-1', name: '天津滨海奥斯卡酒吧', category: 'bar', region: '天津', province: '天津', imageUrl: BAR_IMAGES[3] },
  { id: 'sh-1', name: '上海Playhouse顶级派对空间', category: 'bar', region: '上海', province: '上海', imageUrl: BAR_IMAGES[0] },

  // --- 国际项目 (International) ---
  { id: 'intl-1', name: '缅甸大其力哈利波特KTV酒吧', category: 'bar', region: '大其力', province: '缅甸', imageUrl: KTV_IMAGES[0] },
  { id: 'intl-2', name: '缅甸仰光pioneer plus酒吧', category: 'bar', region: '仰光', province: '缅甸', imageUrl: BAR_IMAGES[1] },
  { id: 'intl-3', name: '越南广农下龙湾HCLUB', category: 'bar', region: '下龙湾', province: '越南', imageUrl: BAR_IMAGES[2] },
  { id: 'intl-4', name: '越南海防 MDM CLUB', category: 'bar', region: '海防', province: '越南', imageUrl: BAR_IMAGES[3] },
  { id: 'intl-5', name: '越南北宁PBSpace Club', category: 'bar', region: '北宁', province: '越南', imageUrl: BAR_IMAGES[0] },
  { id: 'intl-6', name: '越南岘港4U酒吧', category: 'bar', region: '岘港', province: '越南', imageUrl: BAR_IMAGES[1] },

  // --- KTV案例 (KTV Cases) ---
  { id: 'ktv-1', name: '广东广州白云摩柏斯KTV', category: 'ktv', region: '广州', province: '广东', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-2', name: '广东韶关纯唛KTV', category: 'ktv', region: '韶关', province: '广东', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-3', name: '广东肇庆国会partyKTV', category: 'ktv', region: '肇庆', province: '广东', imageUrl: KTV_IMAGES[2] },
  { id: 'ktv-4', name: '广东湛江·潮荟PartyKTV', category: 'ktv', region: '湛江', province: '广东', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-5', name: '广东湛江·上层PartyKTV', category: 'ktv', region: '湛江', province: '广东', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-6', name: '四川广元珊瑚海KTV', category: 'ktv', region: '广元', province: '四川', imageUrl: KTV_IMAGES[2] },
  { id: 'ktv-7', name: '浙江金华-魅力金座KTV', category: 'ktv', region: '金华', province: '浙江', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-8', name: '云南瑞丽宙斯KTV', category: 'ktv', region: '瑞丽', province: '云南', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-9', name: '云南保山麦乐迪KTV', category: 'ktv', region: '保山', province: '云南', imageUrl: KTV_IMAGES[2] },
  { id: 'ktv-10', name: '云南普洱JH88\'PARTYKTV', category: 'ktv', region: '普洱', province: '云南', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-11', name: '云南昆明万喜龙KTV', category: 'ktv', region: '昆明', province: '云南', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-12', name: '云南昆明金生丽水INNIKTV', category: 'ktv', region: '昆明', province: '云南', imageUrl: KTV_IMAGES[2] },
  { id: 'ktv-13', name: '云南昆明潮歌KTV', category: 'ktv', region: '昆明', province: '云南', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-14', name: '云南曲靖未party KTV', category: 'ktv', region: '曲靖', province: '云南', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-15', name: '云南昆明COCO party KTV', category: 'ktv', region: '昆明', province: '云南', imageUrl: KTV_IMAGES[2] },
  { id: 'ktv-16', name: '云南昆明HpartyKTV', category: 'ktv', region: '昆明', province: '云南', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-17', name: '江苏苏州星聚会KTV', category: 'ktv', region: '苏州', province: '江苏', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-18', name: '江苏苏州吴江大世界KTV', category: 'ktv', region: '苏州', province: '江苏', imageUrl: KTV_IMAGES[2] },
  { id: 'ktv-19', name: '江苏宿迁万珑府 partyKTV', category: 'ktv', region: '宿迁', province: '江苏', imageUrl: KTV_IMAGES[0] },
  { id: 'ktv-20', name: '河北保定24K party KTV', category: 'ktv', region: '保定', province: '河北', imageUrl: KTV_IMAGES[1] },
  { id: 'ktv-21', name: '缅甸大其力I0SKTV', category: 'ktv', region: '大其力', province: '缅甸', imageUrl: KTV_IMAGES[2] },
];


