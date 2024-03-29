import sqlite3
conn = sqlite3.connect('saizeriya.db')

cur = conn.cursor()

cur.execute("""create table item(id text primary key,item text not null)""")
cur.execute("""create table price(id text primary key,price integer not null)""")

cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP01', '辛味チキン')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP02', 'アロスティチーニ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP03', 'ほうれん草のソテー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP04', 'ポップコーンシュリンプ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP05', 'エスカルゴのオーブン焼き')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP06', '柔らか青豆の温サラダ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP07', 'チョリソー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP08', 'フリウリ風フリコ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP10', 'ムール貝のガーリック焼き')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP11', 'キャベツとアンチョビのソテー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP12', 'フレッシュチーズとトマトのサラダ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP13', 'セロリのピクルス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP14', '熟成ミラノサラミ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP16', 'プロシュート')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP17', 'アンチョビのフリコ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP21', 'アロスティチーニ（Wサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP22', 'フレッシュチーズとトマトのサラダ（Wサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP23', 'プロシュート（Wサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP24', '熟成ミラノサラミ（Wサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('AP25', 'スパイシーフリコ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('BR01', 'キリン一番搾り（ジョッキ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('BR02', 'キリン一番搾り（グラスビール）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('BR03', 'サントリーオールフリー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('BR04', '-196℃ストロングダブルレモン')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('BR05', 'ラコンブリッコラ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DB01', 'セットドリンクバー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DB02', 'ドリンクバー（キッズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DB03', 'ドリンクバー（単品）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE01', 'ティラミス　クラシコ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE02', 'ヘーゼルナッツ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE03', 'コーヒーゼリー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE05', 'イタリアンジェラート')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE06', 'イタリアンプリン')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE07', 'チョコレートケーキ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE08', 'プリンとヘーゼルナッツの盛合せ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE10', 'ブラッドオレンジのパンナコッタ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE11', 'すっきりレモンのシャーベット')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE12', 'プリントティラミスクラシコの盛合せ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE13', 'トリフアイスクリーム')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE14', 'とろけるティラミス＆コーヒーゼリー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE15', 'イタリアンジェラートのせコーヒーゼリー')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DE16', 'ティラミス　ファミリーサイズ（6人分）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG01', 'ミラノ風ドリア')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG02', 'チーズたっぷりミラノ風ドリア')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG03', '半熟卵のミラノ風ドリア')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG04', 'いろどり野菜のミラノ風ドリア')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG05', 'セットプチフォッカ付きミラノ風ドリア')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG06', 'ほうれん草のグラタン')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG07', 'エビクリームグラタン')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG08', 'シーフードパエリア')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG09', 'エビと野菜のトマトクリームリゾット')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG10', 'ハヤシ＆ターメリックライス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('DG11', '半熟卵のハヤシ＆ターメリックライス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT01', 'ハンバーグステーキ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT02', '若鶏のディアボラ風')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT03', 'イタリアンハンバーグ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT04', '柔らかチキンのチーズ焼き')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT06', 'チョリソーと若鶏の盛合せ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT07', 'ディアボラ風ハンバーグ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT08', 'デミグラスソースのハンバーグ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT09', 'リブステーキ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT10', 'グリルチキン＆ハンバーグ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT11', 'チキン＆ハンバーグのディアボラ風')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT12', 'チーズのせチキン＆ハンバーグ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('MT13', 'ラムときのこのきこり風')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA01', 'タラコソースシシリー風')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA02', 'ミートソースボロニア風')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA03', 'ペペロンチーノ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA04', 'パルマ風スパゲッティ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA05', 'カルボナーラ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA06', 'エビとブロッコリーのオーロラソース')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA07', 'ペストジェノベーゼ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA08', 'アーリオ・オーリオ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA09', 'アラビアータ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA10', 'きのことパンチェッタのボスカイオーラ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA11', 'イカの墨入りスパゲッティ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA12', '半熟卵のミートソースボロニア風')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA13', 'キャベツのペペロンチーノ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA14', 'ナポリジェノベーゼ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA51', 'タラコソースシシリー風（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA52', 'ミートソースボロニア風（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA53', 'ペペロンチーノ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA54', 'パルマ風スパゲッティ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA55', 'カルボナーラ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA56', 'エビとブロッコリーのオーロラソース（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA57', 'ペストジェノベーゼ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA58', 'アーリオ・オーリオ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA59', 'アラビアータ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA60', 'きのことパンチェッタのボスカイオーラ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA61', 'イカの墨入りスパゲッティ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA63', 'キャベツのペペロンチーノ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PA64', 'ナポリジェノベーゼ（大盛）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ01', 'マルゲリータピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ02', 'バッファローモッツァレラのピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ03', 'パンチェッタのピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ04', '野菜ときのこのピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ05', 'アンチョビとルーコラのピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ06', 'たっぷりコーンのピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ07', 'たらこクリームのピザ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ51', 'マルゲリータピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ52', 'バッファローモッツァレラのピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ53', 'パンチェッタのピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ54', '野菜ときのこのピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ55', 'アンチョビとルーコラのピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ56', 'たっぷりコーンのピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('PZ57', 'たらこクリームのピザ（Wチーズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP01', 'ライス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP02', 'ラージライス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP03', 'スモールライス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP04', 'シナモンプチフォッカ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP05', 'セットプチフォッカ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP06', 'プチフォッカ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP08', 'ミニフィセル')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('RP09', 'ガーリックトースト')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA01', '小エビのサラダ（Lサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA02', '小エビのサラダ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA03', '彩りイタリアンサラダ（Lサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA04', '彩りイタリアンサラダ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA05', 'チキンとブロッコリーのサラダ（Lサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA06', 'チキンとブロッコリーのサラダ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA07', 'わかめとオクラのサラダ（Lサイズ）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SA08', 'わかめとオクラのサラダ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SU01', 'コーンクリームスープ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SU02', 'レンズ豆とスペルト小麦のミネストローネ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SU03', 'マッシュルームスープ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('SU04', 'たまねぎのズッパ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('TP01', 'トッピング半熟卵')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('TP02', 'ペコリーノ・ロマーノ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('TP03', 'ガルムソース＆野菜ペースト')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('TP04', '野菜ペースト')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('TP06', 'やみつきスパイス')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('TP07', 'フルーツソース（カシス＆ブルーベリー）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN01', 'グラスワイン（赤）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN02', 'グラスワイン（白）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN03', 'デカンタ（250ml）（赤）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN04', 'デカンタ（250ml）（白）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN05', 'デカンタ（500ml）（赤）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN06', 'デカンタ（500ml）（白）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN07', 'マグナム（1500ml）（赤）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN08', 'マグナム（1500ml）（白）')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN12', 'ランブルスコ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN13', 'ドンラファエロ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN14', 'ランブルスコセッコ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN15', 'ペルデッキオ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN16', 'キャンティ')""")
cur.execute("""INSERT INTO item (`id`, `item`) VALUES('WN19', 'キャンティルフィナリゼルバ')""")

cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP01', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP02', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP03', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP04', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP05', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP06', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP07', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP08', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP10', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP11', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP12', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP13', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP14', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP16', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP17', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP21', 800)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP22', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP23', 800)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP24', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('AP25', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('BR01', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('BR02', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('BR03', 250)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('BR04', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('BR05', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DB01', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DB02', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DB03', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE01', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE02', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE03', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE05', 250)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE06', 250)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE07', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE08', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE10', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE11', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE12', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE13', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE14', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE15', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DE16', 1800)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG01', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG02', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG03', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG04', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG05', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG06', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG07', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG08', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG09', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG10', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('DG11', 550)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT01', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT02', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT03', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT04', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT06', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT07', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT08', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT09', 1000)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT10', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT11', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT12', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('MT13', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA01', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA02', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA03', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA04', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA05', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA06', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA07', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA08', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA09', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA10', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA11', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA12', 450)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA13', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA14', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA51', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA52', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA53', 450)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA54', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA55', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA56', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA57', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA58', 450)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA59', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA60', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA61', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA63', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PA64', 700)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ01', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ02', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ03', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ04', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ05', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ06', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ07', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ51', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ52', 600)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ53', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ54', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ55', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ56', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('PZ57', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP01', 150)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP02', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP03', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP04', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP05', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP06', 150)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP08', 150)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('RP09', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA01', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA02', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA03', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA04', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA05', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA06', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA07', 500)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SA08', 350)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SU01', 150)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SU02', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SU03', 150)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('SU04', 300)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('TP01', 50)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('TP02', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('TP03', 150)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('TP04', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('TP06', 50)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('TP07', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN01', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN02', 100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN03', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN04', 200)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN05', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN06', 400)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN07', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN08', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN12', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN13', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN14', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN15', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN16', 1100)""")
cur.execute("""INSERT INTO price (`id`, `price`) VALUES('WN19', 2200);""")

conn.commit()
print("saizeriya.dbを作成しました。")
conn.close()
