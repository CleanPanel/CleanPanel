'use strict';
const BASE = window.location.pathname.replace(/\/?$/, '');
const STR = {
  fa: {
    panel_name: 'پنل خروجی تمیز', password: 'رمز عبور', password2: 'تکرار رمز',
    setup_hint: 'اولین ورود — یک رمز برای پنل انتخاب کنید', set_password: 'تنظیم رمز و ورود',
    login: 'ورود', logout: 'خروج', tab_dashboard: 'داشبورد', tab_exits: 'خروجی‌ها',
    tab_nodes: 'نودها', tab_users: 'کاربرها', tab_settings: 'تنظیمات', tab_proxy: 'پروکسی', tab_api: 'API',
    pw_mismatch: 'رمزها یکی نیستند', loading: 'در حال بارگذاری…',
    sys_status: 'وضعیت سیستم', cpu_load: 'بار CPU', ram: 'RAM آزاد', disk: 'دیسک آزاد',
    g_cpu: 'پردازنده', g_ram: 'حافظه RAM', g_disk: 'دیسک', traffic_live: 'ترافیک زنده', per_sec: '/ثانیه',
    uptime: 'آپتایم', xray: 'Xray', socks: 'Socks', running: 'روشن', stopped: 'خاموش',
    exits: 'خروجی‌ها', users: 'کاربرها', csv_nodes: 'نودهای لیست', days: 'روز',
    st_up: 'تمیز و وصل', st_dirty: 'کثیف', st_down: 'قطع', st_connecting: 'در حال اتصال',
    score: 'اسکور', node: 'نود', exit_ip: 'IP خروجی', inbound_port: 'پورت اینباند',
    swap: 'تعویض نود', disconnect: 'قطع و حذف', confirm_disconnect: 'این خروجی حذف شود؟',
    no_exits: 'هنوز خروجی‌ای ساخته نشده — از تب نودها یکی وصل کنید.',
    hunting: 'شکار نود تمیز شروع شد…', country: 'کشور', nodes_of: 'نودهای',
    ping: 'پینگ', speed: 'سرعت', sessions: 'نشست‌ها', datacenter: 'دیتاسنتر',
    connect: 'وصل کن', connecting: 'در حال اتصال…', new_badge: 'جدید',
    add_user: 'افزودن کاربر', name: 'نام', total_gb: 'حجم کل (GB — صفر یعنی نامحدود)',
    expiry_days: 'مدت (روز — صفر یعنی بدون انقضا)', attach_exits: 'خروجی‌های این کاربر',
    add: 'افزودن', used: 'مصرف', remaining: 'مانده', expiry: 'انقضا', never: 'نامحدود',
    status: 'وضعیت', active: 'فعال', expired: 'منقضی', exhausted: 'حجم تمام',
    sub_link: 'لینک اشتراک', copy: 'کپی', copied: 'کپی شد', open: 'باز کردن',
    reset_traffic: 'صفر کردن حجم', del: 'حذف', confirm_delete_user: 'این کاربر حذف شود؟',
    no_users: 'هنوز کاربری ساخته نشده.', save: 'ذخیره', saved: 'ذخیره شد',
    target_score: 'اسکور هدف', check_interval: 'فاصله چک خروجی‌ها (دقیقه)',
    auto_swap: 'تعویض خودکار خروجی کثیف/قطع', auto_add: 'اضافه شدن خودکار کشور جدید',
    tg_token: 'توکن بات تلگرام (اختیاری)', tg_chat: 'چت‌آیدی تلگرام (اختیاری)',
    font: 'فونت', language: 'زبان پیش‌فرض', sni: 'SNI ریالیتی', host: 'دامنه پنل',
    api_token: 'توکن API پنل', regen: 'ساخت توکن جدید', confirm_regen: 'توکن قبلی باطل می‌شود. ادامه؟',
    api_help: 'توکن را در هدر X-Api-Token یا Authorization: Bearer بفرستید.',
    endpoints: 'دستورها', unlimited: 'نامحدود', yes: 'بله', no: 'خیر',
    select_country: 'کشور را انتخاب کنید', nodes_loading: 'در حال گرفتن و اسکور نودها… (بار اول کمی طول می‌کشد)',
    connected_ok: 'خروجی وصل شد و تمیز است', err_generic: 'خطا رخ داد',
    find_clean: 'پیدا کردن IP تمیز', hunt_started: 'شکار IP تمیز شروع شد…',
    searching_clean: 'در حال پیدا کردن IP تمیز…', hunt_pending: 'فعلاً پیدا نشد — جستجو ادامه دارد',
    no_nodes_wait: 'عدم وجود نود، لطفا صبر کنید',
    hunt_vg_title: 'کشورهای VPN Gate', hunt_moo_title: 'کشورهای MooProxy',
    hunt_countries_note: 'فقط کشورهای انتخاب‌شده به‌صورت خودکار شکار می‌شوند؛ حذف انتخاب، شکار در حال جستجوی آن کشور را متوقف می‌کند (خروجی تمیز فعال دست‌نخورده می‌ماند).',
    search_countries: 'جستجوی کشور…', select_all: 'همه', select_none: 'هیچ‌کدام',
    has_nodes: 'نود دارد', no_nodes_now: 'فعلاً نود ندارد',
    st_searching: 'در حال جستجو', tried_lbl: 'نود امتحان‌شده', current_lbl: 'در حال بررسی',
    elapsed_lbl: 'زمان گذشته', approx_lbl: 'زمان تقریبی', estimating: 'در حال تخمین…',
    mins: 'دقیقه', direct_badge: 'مستقیم · IP سرور', edit_user: 'ویرایش', cancel: 'لغو',
    limit_ip: 'سقف IP همزمان (0 = نامحدود)', online_users: 'کاربران آنلاین',
    online: 'آنلاین', offline: 'آفلاین', active_ips: 'IP فعال', last_seen: 'آخرین فعالیت',
    ip_limit: 'سقف IP', just_now: 'همین الان', min_ago: 'دقیقه پیش', hour_ago: 'ساعت پیش',
    enforce_ip_limit: 'اجبار سقف IP (غیرفعال‌سازی خودکار)', online_window: 'پنجره آنلاین بودن (دقیقه)',
    auto_hunt_new: 'شکار خودکار کشور جدید', auto_add_all: 'افزودن خروجی جدید به همه کاربرها',
    country_watch: 'فاصله بررسی کشور جدید (ثانیه)',
    hunt_parallel: 'شکار موازی (بررسی همزمان نودها)',
    backup: 'پشتیبان‌گیری و بازیابی', backup_export: 'دانلود فایل بکاپ',
    backup_restore: 'بازیابی از فایل بکاپ',
    backup_hint: 'فایل بکاپ شامل همه تنظیمات (از جمله توکن‌های API)، کاربرها، خروجی‌ها و هش رمز ادمین است — مثل رمز عبور از آن نگهداری کنید. هنگام بازیابی، اول از داده فعلی یک نسخه امن خودکار گرفته می‌شود، بعد داده بکاپ جایگزین و پنل ری‌استارت می‌شود.',
    restore_confirm: 'داده فعلی پنل با این فایل بکاپ جایگزین شود؟',
    backup_restarting: 'بازیابی انجام شد — پنل در حال ری‌استارت است…',
    upd_title: 'آپدیت پنل', upd_current: 'نسخه فعلی', upd_latest: 'آخرین نسخه',
    upd_check: 'بررسی آپدیت', upd_now: 'آپدیت کن', upd_uptodate: 'پنل به‌روز است',
    upd_available: 'نسخه جدید موجود است',
    upd_confirm: 'پنل آپدیت شود؟ اول از کد فعلی یک نسخه امن گرفته می‌شود و داده‌ها (کاربرها و خروجی‌ها) دست‌نخورده می‌مانند.',
    upd_restarting: 'آپدیت اعمال شد — پنل در حال ری‌استارت است…',
    upd_gh_owner: 'مالک مخزن گیت‌هاب (Owner)', upd_gh_repo: 'نام مخزن (Repo)',
    upd_gh_token: 'توکن گیت‌هاب (فقط‌خواندنی)', upd_base: 'آدرس پایه آپدیت (اختیاری — برای تست)',
    upd_last: 'آخرین آپدیت', upd_save_src: 'ذخیره منبع آپدیت', upd_checking: 'در حال بررسی…',
    sub_qr: 'کیوآر اشتراک', close: 'بستن', enable: 'فعال کردن', disable: 'غیرفعال کردن',
    disabled: 'غیرفعال', renew30: '+30 روز', total_used: 'مجموع مصرف',
    change_pw: 'تغییر رمز پنل', cur_pw: 'رمز فعلی', new_pw: 'رمز جدید', pw_changed: 'رمز عوض شد',
    tg_test: 'ارسال پیام تست', tg_test_ok: 'پیام تست ارسال شد',
    api_tokens: 'توکن‌های API', token_name: 'نام توکن (مثلاً: ربات فروش)',
    create_token: 'ساخت توکن جدید', token_once: 'این مقدار فقط همین یک بار نمایش داده می‌شود — کپی و نگهش دارید:',
    revoke: 'حذف', confirm_revoke: 'این توکن حذف و باطل شود؟', default_token: 'اصلی',
    created_lbl: 'ساخته‌شده', no_tokens: 'توکن اضافه‌ای ساخته نشده.',
    inbounds: 'اینباندها', add_inbound: 'افزودن اینباند', protocol: 'پروتکل',
    port_optional: 'پورت (خالی = خودکار)', default_inbound: 'پیش‌فرض',
    confirm_del_inbound: 'این اینباند حذف شود؟', inbound_added: 'اینباند اضافه شد',
    inbound_deleted: 'اینباند حذف شد', exit_deleted: 'خروجی حذف شد',
    exits_deleted: 'خروجی‌ها حذف شدند',
    max_exits: 'سقف خروجی‌ها',
    sel_all_exits: 'انتخاب همه', selected_lbl: 'انتخاب شده',
    delete_selected: 'حذف انتخاب‌شده‌ها', clear_selection: 'لغو انتخاب',
    bulk_del_title: 'حذف خروجی‌های انتخاب‌شده',
    bulk_del_warn: 'هشدار: بین خروجی‌های انتخاب‌شده، خروجی فعال و تمیز با اسکور 0 هست. حذف آن برگشت‌ناپذیر است — برای برگرداندنش باید دوباره شکار شود.',
    bulk_del_note: 'کشور خروجی‌های حذف‌شده از شکار خودکار هم برداشته می‌شود — واچر دوباره آن‌ها را اضافه نمی‌کند.',
    custom_exit: 'خروجی سفارشی', custom_label: 'نام دلخواه خروجی', custom_flag: 'ایموجی پرچم (اختیاری)',
    custom_src: 'منبع نود', custom_src_ovpn: 'فایل کانفیگ .ovpn', custom_src_vpngate: 'نود VPN Gate',
    custom_ovpn_hint: 'محتوای فایل .ovpn را بچسبانید یا فایل را انتخاب کنید',
    custom_node_ph: 'IP یا هاست نود در لیست VPN Gate', custom_create: 'ساخت خروجی سفارشی',
    custom_badge: 'سفارشی', custom_dirty_note: 'در صورت کثیف شدن، خروجی سفارشی به‌صورت خودکار حذف می‌شود',
    custom_replace: 'جایگزینی کانفیگ', custom_apply: 'اعمال و بررسی', custom_creating: 'در حال ساخت و بررسی…',
    custom_replaced: 'کانفیگ جایگزین و بررسی شد',
    lic_title: 'قفل سراسری پنل‌ها', lic_all: 'قفل همه پنل‌ها',
    lic_note: 'با فعال‌کردن این قفل، همه پنل‌های نصب‌شده از این نسخه (به‌جز همین پنل اصلی) قفل می‌شوند: ورود بسته، اشتراک‌ها و اینباند خروجی‌ها غیرفعال — تا وقتی قفل را از همین‌جا بردارید.',
    lic_status: 'وضعیت لایسنس', lic_on: 'قفل است', lic_off: 'باز است', lic_checked: 'آخرین بررسی',
    lic_unreachable: 'سرور لایسنس در دسترس نیست — پنل باز می‌ماند', lic_locked_msg: 'این پنل توسط مالک قفل شده است',
        gate_title: 'خروجی جدید — VPN Gate',
    moo_title: 'MooProxy — IP رزیدنشال', moo_badge: 'MooProxy',
    moo_not_configured: 'حساب MooProxy تنظیم نشده — از تنظیمات یوزر و رمز پروکسی را وارد و فعال کنید',
    moo_find_clean: 'شکار IP تمیز (MooProxy)', moo_hunt_started: 'شکار MooProxy شروع شد…',
    moo_enabled: 'فعال کردن MooProxy', moo_user: 'یوزر پروکسی MooProxy',
    moo_pass: 'رمز پروکسی MooProxy (خالی = بدون تغییر)',
    moo_host: 'هاست ورودی (Entry host)', moo_port: 'پورت ورودی (Entry port)',
    moo_sticky: 'مدت نشست (دقیقه — حداکثر 120)', moo_parallel: 'شکار موازی MooProxy',
    moo_max_attempts: 'حداکثر تلاش هر شکار', moo_max_mb: 'سقف ترافیک هر شکار (MB)',
    moo_traffic_cap: 'سقف کل ترافیک MooProxy (MB — صفر یعنی نامحدود)',
    moo_note: 'شکار MooProxy از ترافیک حساب شما استفاده می‌کند — هر نشست یک IP خروجی ثابت دارد و فقط IP با اسکور 0 قبول می‌شود. در صورت کثیف شدن، خروجی حذف می‌شود.',
    moo_used: 'مصرف شکار', moo_cap: 'سقف ترافیک',
    moo_configured: 'متصل', moo_not_conf: 'تنظیم نشده',
    moo_session_expires: 'انقضای نشست', moo_clean: 'خروجی تمیز',
    traffic_per_user: 'ترافیک کاربرها', cores_lbl: 'هسته‌ها',
    live_now: 'زنده',
    checking_lbl: 'در حال بررسی…', result_lbl: 'نتیجه',
    oc_clean: 'تمیز', oc_dirty: 'کثیف', oc_timeout: 'تایم‌اوت',
    oc_connect: 'وصل نشد', oc_noscore: 'اسکور نامشخص',
    proxy_create: 'ساخت پروکسی تلگرام', proxy_name: 'نام پروکسی (اختیاری)',
    proxy_egress: 'خروجی (کشور)', proxy_fronting: 'دامنه فرانتینگ (Fronting domain)',
    proxy_sponsor: 'تگ اسپانسر (اختیاری)',
    proxy_sponsor_hint: 'پروکسی‌های تگ‌دار روی telemt اجرا می‌شوند و به تگ @MTProxybot نیاز دارند.',
    proxy_limits: 'محدودیت‌ها (0 یعنی نامحدود)', proxy_max_users: 'حداکثر کاربر',
    proxy_traffic_cap: 'سقف ترافیک', proxy_expiry: 'انقضا', proxy_max_ips: 'حداکثر IP متفاوت',
    proxy_create_btn: 'ساخت پروکسی', proxy_created: 'پروکسی ساخته شد',
    proxy_no_proxies: 'هنوز پروکسی‌ای ساخته نشده — از کارت بالا یکی بسازید.',
    proxy_link: 'لینک پروکسی', proxy_secret: 'سکرت', proxy_show: 'نمایش', proxy_hide: 'پنهان',
    proxy_port: 'پورت', proxy_tag_set: 'تگ ثبت شده', proxy_no_tag: 'بدون تگ',
    proxy_adopted: 'adopted', proxy_stats_na: 'آمار در دسترس نیست',
    proxy_conns: 'اتصال زنده', proxy_users_est: 'کاربر (تخمینی)', proxy_distinct_ips: 'IP متفاوت',
    proxy_up: 'آپلود', proxy_down: 'دانلود', proxy_start: 'شروع', proxy_stop: 'توقف',
    proxy_restart: 'ری‌استارت', proxy_delete: 'حذف پروکسی', proxy_deleted: 'پروکسی حذف شد',
    proxy_started: 'پروکسی شروع شد', proxy_stopped: 'پروکسی متوقف شد',
    proxy_restarted: 'پروکسی ری‌استارت شد',
    proxy_confirm_delete: 'این پروکسی متوقف و حذف شود؟',
    proxy_limited: 'محدود شده', proxy_limit_traffic: 'سقف ترافیک تمام شد',
    proxy_limit_expired: 'منقضی شده', proxy_limit_users: 'سقف کاربر پر شد',
    proxy_limit_ips: 'سقف IP پر شد',
    proxy_traffic: 'ترافیک', proxy_users: 'کاربرها', proxy_ips: 'IPها',
    proxy_expires: 'انقضا', proxy_no_expiry: 'بدون انقضا', proxy_main_server: 'سرور اصلی',
    proxy_egress_loading: 'در حال گرفتن خروجی‌ها…',
    tab_protocols: 'پروتکل‌ها',
    proto_sub: 'یک اشتراک، همه راه‌های اتصال — وایرگارد و اوپن‌وی‌پی‌ان',
    proto_wg: 'وایرگارد', proto_ovpn: 'اوپن‌وی‌پی‌ان',
    proto_enabled_lbl: 'فعال', proto_listen_port: 'پورت شنود', proto_port: 'پورت',
    proto_save_port: 'ذخیره پورت',
    proto_port_note: 'پورت فقط وقتی سرور خاموش است قابل تغییر است.',
    proto_egress: 'خروجی (کشور)', proto_direct: 'سرور اصلی — Score 3',
    proto_unavailable: 'در دسترس نیست',
    proto_unavailable_hint: 'باینری یا کرنل روی سرور در دسترس نیست — خطای سرور را ببینید.',
    proto_server_pubkey: 'کلید عمومی سرور', proto_kernel: 'کرنل',
    proto_users: 'کاربرها', proto_no_peer: 'هنوز کانفیگ ساخته نشده',
    proto_create: 'ساخت کانفیگ', proto_allowed_ip: 'IP داخلی',
    proto_pubkey: 'کلید عمومی', proto_handshake: 'آخرین هندشیک',
    proto_handshake_never: 'هنوز هندشیک نشده', proto_handshake_ago: 'پیش',
    proto_rx: 'دانلود', proto_tx: 'آپلود',
    proto_connected: 'متصل', proto_not_connected: 'متصل نیست',
    proto_qr: 'کیوآر', proto_download_conf: 'دانلود .conf',
    proto_download_ovpn: 'دانلود .ovpn', proto_revoke: 'ابطال',
    proto_confirm_revoke_wg: 'کانفیگ وایرگارد این کاربر باطل و حذف شود؟ دسترسی او با این کانفیگ قطع می‌شود.',
    proto_confirm_revoke_ovpn: 'کانفیگ اوپن‌وی‌پی‌ان این کاربر باطل و حذف شود؟ دسترسی او با این کانفیگ قطع می‌شود.',
    proto_revoked: 'کانفیگ باطل شد', proto_created: 'کانفیگ ساخته شد',
    proto_stats_na: 'آمار در دسترس نیست',
    proto_no_users: 'هنوز کاربری ساخته نشده.',
    proto_egress_loading: 'در حال گرفتن خروجی‌ها…',
    proto_wg_qr_title: 'کیوآر وایرگارد', proto_conf_text: 'متن کانفیگ',
  },
  en: {
    panel_name: 'Clean Exit Panel', password: 'Password', password2: 'Repeat password',
    setup_hint: 'First visit — choose a password for the panel', set_password: 'Set password & enter',
    login: 'Log in', logout: 'Log out', tab_dashboard: 'Dashboard', tab_exits: 'Exits',
    tab_nodes: 'Nodes', tab_users: 'Users', tab_settings: 'Settings', tab_proxy: 'Proxy', tab_api: 'API',
    pw_mismatch: 'Passwords do not match', loading: 'Loading…',
    sys_status: 'System status', cpu_load: 'CPU load', ram: 'Free RAM', disk: 'Free disk',
    g_cpu: 'CPU', g_ram: 'RAM', g_disk: 'Disk', traffic_live: 'Live traffic', per_sec: '/s',
    uptime: 'Uptime', xray: 'Xray', socks: 'Socks', running: 'Running', stopped: 'Stopped',
    exits: 'Exits', users: 'Users', csv_nodes: 'Listed nodes', days: 'days',
    st_up: 'Clean & up', st_dirty: 'Dirty', st_down: 'Down', st_connecting: 'Connecting',
    score: 'Score', node: 'Node', exit_ip: 'Exit IP', inbound_port: 'Inbound port',
    swap: 'Swap node', disconnect: 'Disconnect & delete', confirm_disconnect: 'Delete this exit?',
    no_exits: 'No exits yet — connect one from the Nodes tab.',
    hunting: 'Clean-node hunt started…', country: 'Country', nodes_of: 'Nodes of',
    ping: 'Ping', speed: 'Speed', sessions: 'Sessions', datacenter: 'Datacenter',
    connect: 'Connect', connecting: 'Connecting…', new_badge: 'NEW',
    add_user: 'Add user', name: 'Name', total_gb: 'Total GB (0 = unlimited)',
    expiry_days: 'Duration in days (0 = no expiry)', attach_exits: 'Exits for this user',
    add: 'Add', used: 'Used', remaining: 'Remaining', expiry: 'Expiry', never: 'Unlimited',
    status: 'Status', active: 'Active', expired: 'Expired', exhausted: 'Exhausted',
    sub_link: 'Subscription link', copy: 'Copy', copied: 'Copied', open: 'Open',
    reset_traffic: 'Reset traffic', del: 'Delete', confirm_delete_user: 'Delete this user?',
    no_users: 'No users yet.', save: 'Save', saved: 'Saved',
    target_score: 'Target score', check_interval: 'Exit check interval (minutes)',
    auto_swap: 'Auto-swap dirty/down exits', auto_add: 'Auto-add new countries',
    tg_token: 'Telegram bot token (optional)', tg_chat: 'Telegram chat ID (optional)',
    font: 'Font', language: 'Default language', sni: 'Reality SNI', host: 'Panel domain',
    api_token: 'Panel API token', regen: 'Regenerate token', confirm_regen: 'The old token will stop working. Continue?',
    api_help: 'Send the token in the X-Api-Token header or as Authorization: Bearer.',
    endpoints: 'Endpoints', unlimited: 'Unlimited', yes: 'Yes', no: 'No',
    select_country: 'Select a country', nodes_loading: 'Fetching & scoring nodes… (first time takes a while)',
    connected_ok: 'Exit connected and clean', err_generic: 'Something went wrong',
    find_clean: 'Find clean IP', hunt_started: 'Clean-IP hunt started…',
    searching_clean: 'Searching for a clean IP…', hunt_pending: 'Not found yet — search continues',
    no_nodes_wait: 'No nodes available, please wait',
    hunt_vg_title: 'VPN Gate countries', hunt_moo_title: 'MooProxy countries',
    hunt_countries_note: 'Only selected countries are auto-hunted; deselecting stops that country’s searching hunt (an active clean exit is left alone).',
    search_countries: 'Search countries…', select_all: 'All', select_none: 'None',
    has_nodes: 'has nodes', no_nodes_now: 'no nodes right now',
    st_searching: 'Searching', tried_lbl: 'Nodes tried', current_lbl: 'Checking',
    elapsed_lbl: 'Elapsed', approx_lbl: 'Approx. time', estimating: 'Estimating…',
    mins: 'min', direct_badge: 'Direct · Server IP', edit_user: 'Edit', cancel: 'Cancel',
    limit_ip: 'IP limit (0 = unlimited)', online_users: 'Online users',
    online: 'Online', offline: 'Offline', active_ips: 'Active IPs', last_seen: 'Last activity',
    ip_limit: 'IP limit', just_now: 'just now', min_ago: 'min ago', hour_ago: 'h ago',
    enforce_ip_limit: 'Enforce IP limit (auto-disable)', online_window: 'Online window (minutes)',
    auto_hunt_new: 'Auto-hunt new countries', auto_add_all: 'Add new exits to all users',
    country_watch: 'New-country check interval (sec)',
    hunt_parallel: 'Parallel hunt (concurrent node checks)',
    backup: 'Backup & restore', backup_export: 'Download backup file',
    backup_restore: 'Restore from backup file',
    backup_hint: 'The backup file contains all settings (including API tokens), users, exits and the admin password hash — keep it like a password. On restore, a safety snapshot of the current data is taken automatically first, then the backup is applied and the panel restarts.',
    restore_confirm: 'Replace the current panel data with this backup file?',
    backup_restarting: 'Restored — the panel is restarting…',
    upd_title: 'Panel update', upd_current: 'Current version', upd_latest: 'Latest version',
    upd_check: 'Check for updates', upd_now: 'Update now', upd_uptodate: 'Panel is up to date',
    upd_available: 'A new version is available',
    upd_confirm: 'Update the panel? A safety snapshot of the current code is taken first; data (users and exits) is untouched.',
    upd_restarting: 'Update applied — the panel is restarting…',
    upd_gh_owner: 'GitHub owner', upd_gh_repo: 'GitHub repo',
    upd_gh_token: 'GitHub token (read-only)', upd_base: 'Update base URL (optional — for testing)',
    upd_last: 'Last update', upd_save_src: 'Save update source', upd_checking: 'Checking…',
    sub_qr: 'Subscription QR', close: 'Close', enable: 'Enable', disable: 'Disable',
    disabled: 'Disabled', renew30: '+30 days', total_used: 'Total used',
    change_pw: 'Change panel password', cur_pw: 'Current password', new_pw: 'New password',
    pw_changed: 'Password changed',
    tg_test: 'Send test message', tg_test_ok: 'Test message sent',
    api_tokens: 'API Tokens', token_name: 'Token name (e.g. Sales bot)',
    create_token: 'Create new token', token_once: 'This value is shown only once — copy and keep it:',
    revoke: 'Revoke', confirm_revoke: 'Revoke this token?', default_token: 'Main',
    created_lbl: 'Created', no_tokens: 'No extra tokens yet.',
    inbounds: 'Inbounds', add_inbound: 'Add inbound', protocol: 'Protocol',
    port_optional: 'Port (blank = auto)', default_inbound: 'Default',
    confirm_del_inbound: 'Delete this inbound?', inbound_added: 'Inbound added',
    inbound_deleted: 'Inbound deleted', exit_deleted: 'Exit deleted',
    exits_deleted: 'Exits deleted',
    max_exits: 'Max exits',
    sel_all_exits: 'Select all', selected_lbl: 'selected',
    delete_selected: 'Delete selected', clear_selection: 'Clear selection',
    bulk_del_title: 'Delete selected exits',
    bulk_del_warn: 'Warning: the selection includes an active clean exit with score 0. Deleting it is permanent — it would have to be hunted again.',
    bulk_del_note: 'Deleted exits’ countries are also removed from auto-hunt — the watcher will not re-add them.',
    custom_exit: 'Custom exit', custom_label: 'Custom exit name', custom_flag: 'Flag emoji (optional)',
    custom_src: 'Node source', custom_src_ovpn: '.ovpn config file', custom_src_vpngate: 'VPN Gate node',
    custom_ovpn_hint: 'Paste the .ovpn content or pick the file',
    custom_node_ph: 'Node IP or hostname from the VPN Gate list', custom_create: 'Create custom exit',
    custom_badge: 'Custom', custom_dirty_note: 'If it goes dirty, the custom exit is deleted automatically',
    custom_replace: 'Replace config', custom_apply: 'Apply & verify', custom_creating: 'Creating & verifying…',
    custom_replaced: 'Config replaced & verified',
    lic_title: 'Global panel lock', lic_all: 'Lock all panels',
    lic_note: 'Turning this on locks every installed panel of this version (except this master): logins, subscriptions and exit inbounds are disabled until you release the lock here.',
    lic_status: 'License status', lic_on: 'Locked', lic_off: 'Unlocked', lic_checked: 'Last check',
    lic_unreachable: 'License server unreachable — panel stays open', lic_locked_msg: 'This panel has been locked by its owner',
        gate_title: 'New exit — VPN Gate',
    moo_title: 'MooProxy — Residential IP', moo_badge: 'MooProxy',
    moo_not_configured: 'MooProxy account not configured — enter the proxy user and password in Settings and enable it',
    moo_find_clean: 'Find clean IP (MooProxy)', moo_hunt_started: 'MooProxy hunt started…',
    moo_enabled: 'Enable MooProxy', moo_user: 'MooProxy proxy user',
    moo_pass: 'MooProxy proxy password (blank = keep current)',
    moo_host: 'Entry host', moo_port: 'Entry port',
    moo_sticky: 'Session length (minutes — max 120)', moo_parallel: 'MooProxy parallel hunt',
    moo_max_attempts: 'Max attempts per hunt', moo_max_mb: 'Traffic cap per hunt (MB)',
    moo_traffic_cap: 'Total MooProxy traffic cap (MB — 0 = unlimited)',
    moo_note: 'MooProxy hunts use your account traffic — each session holds one fixed exit IP and only score-0 IPs are accepted. A dirty exit is deleted.',
    moo_used: 'Hunt usage', moo_cap: 'Traffic cap',
    moo_configured: 'Connected', moo_not_conf: 'Not configured',
    moo_session_expires: 'Session expires', moo_clean: 'clean exit',
    traffic_per_user: 'Per-user traffic', cores_lbl: 'Cores',
    live_now: 'live',
    checking_lbl: 'Checking…', result_lbl: 'Result',
    oc_clean: 'Clean', oc_dirty: 'Dirty', oc_timeout: 'Timeout',
    oc_connect: 'Connect failed', oc_noscore: 'No score',
    proxy_create: 'Create Telegram proxy', proxy_name: 'Proxy name (optional)',
    proxy_egress: 'Egress (country)', proxy_fronting: 'Fronting domain',
    proxy_sponsor: 'Sponsor tag (optional)',
    proxy_sponsor_hint: 'Tagged proxies run on telemt and need a tag from @MTProxybot.',
    proxy_limits: 'Limits (0 = unlimited)', proxy_max_users: 'Max users',
    proxy_traffic_cap: 'Traffic cap', proxy_expiry: 'Expiry', proxy_max_ips: 'Max distinct IPs',
    proxy_create_btn: 'Create proxy', proxy_created: 'Proxy created',
    proxy_no_proxies: 'No proxies yet — create one in the card above.',
    proxy_link: 'Proxy link', proxy_secret: 'Secret', proxy_show: 'Show', proxy_hide: 'Hide',
    proxy_port: 'Port', proxy_tag_set: 'Tag set', proxy_no_tag: 'No tag',
    proxy_adopted: 'adopted', proxy_stats_na: 'Stats unavailable',
    proxy_conns: 'Live conns', proxy_users_est: 'Users (est.)', proxy_distinct_ips: 'Distinct IPs',
    proxy_up: 'Upload', proxy_down: 'Download', proxy_start: 'Start', proxy_stop: 'Stop',
    proxy_restart: 'Restart', proxy_delete: 'Delete proxy', proxy_deleted: 'Proxy deleted',
    proxy_started: 'Proxy started', proxy_stopped: 'Proxy stopped',
    proxy_restarted: 'Proxy restarted',
    proxy_confirm_delete: 'Stop and delete this proxy?',
    proxy_limited: 'Limited', proxy_limit_traffic: 'traffic cap reached',
    proxy_limit_expired: 'expired', proxy_limit_users: 'user limit reached',
    proxy_limit_ips: 'IP limit reached',
    proxy_traffic: 'Traffic', proxy_users: 'Users', proxy_ips: 'IPs',
    proxy_expires: 'Expires', proxy_no_expiry: 'No expiry', proxy_main_server: 'Main server',
    proxy_egress_loading: 'Loading exits…',
    tab_protocols: 'Protocols',
    proto_sub: 'One subscription, every way to connect — WireGuard and OpenVPN',
    proto_wg: 'WireGuard', proto_ovpn: 'OpenVPN',
    proto_enabled_lbl: 'Enabled', proto_listen_port: 'Listen port', proto_port: 'Port',
    proto_save_port: 'Save port',
    proto_port_note: 'The port can only be changed while the server is stopped.',
    proto_egress: 'Egress (country)', proto_direct: 'Main server — Score 3',
    proto_unavailable: 'Unavailable',
    proto_unavailable_hint: 'The binary or kernel is not available on the server — see the server error.',
    proto_server_pubkey: 'Server public key', proto_kernel: 'Kernel',
    proto_users: 'Users', proto_no_peer: 'No config created yet',
    proto_create: 'Create config', proto_allowed_ip: 'Internal IP',
    proto_pubkey: 'Public key', proto_handshake: 'Last handshake',
    proto_handshake_never: 'No handshake yet', proto_handshake_ago: 'ago',
    proto_rx: 'Download', proto_tx: 'Upload',
    proto_connected: 'Connected', proto_not_connected: 'Not connected',
    proto_qr: 'QR', proto_download_conf: 'Download .conf',
    proto_download_ovpn: 'Download .ovpn', proto_revoke: 'Revoke',
    proto_confirm_revoke_wg: 'Revoke and delete this user’s WireGuard config? Their access with this config will stop.',
    proto_confirm_revoke_ovpn: 'Revoke and delete this user’s OpenVPN config? Their access with this config will stop.',
    proto_revoked: 'Config revoked', proto_created: 'Config created',
    proto_stats_na: 'Stats unavailable',
    proto_no_users: 'No users yet.',
    proto_egress_loading: 'Loading exits…',
    proto_wg_qr_title: 'WireGuard QR', proto_conf_text: 'Config text',
  },
};
/* UI v2 strings (added; every v1 key above is kept) */
Object.assign(STR.fa, {
  per_sec: '/s',
  server_direct: 'سرور · مستقیم', more_actions: 'کارهای بیشتر', search: 'جستجو…', choose_file: 'انتخاب فایل', choose_ovpn: 'انتخاب فایل ‎.ovpn',
  theme: 'پوسته', theme_auto: 'خودکار', theme_dark: 'تیره', theme_light: 'روشن', theme_toggle: 'تغییر پوسته',
  density: 'تراکم', density_compact: 'فشرده', density_comfortable: 'راحت', density_toggle: 'تغییر تراکم',
  unsaved: 'تغییرات ذخیره‌نشده', unsaved_title: 'تغییرات ذخیره نشده‌اند', unsaved_leave: 'تنظیماتی که تغییر داده‌اید هنوز ذخیره نشده. بدون ذخیره خارج می‌شوید؟', discard: 'دور ریختن',
  nav_overview: 'نمای کلی', nav_inbounds: 'اینباندها', nav_exits: 'خروجی‌ها', nav_users: 'کاربرها', nav_subs: 'اشتراک', nav_logs: 'گزارش‌ها', nav_settings: 'تنظیمات',
  nav_overview_sub: 'وضعیت زنده سرور، ترافیک و خروجی‌ها', nav_inbounds_sub: 'همه اینباندها در یک‌جا — Xray، وایرگارد، اوپن‌وی‌پی‌ان، پروکسی تلگرام', nav_exits_sub: 'منابع، شکار IP تمیز و فهرست خروجی‌ها',
  nav_users_sub: 'کاربرها، حجم، انقضا، لینک و استودیوی اشتراک', nav_subs_sub: 'استودیوی اشتراک — پیش‌نمایش و کارت اشتراک‌گذاری', nav_logs_sub: 'تاریخچه شکار نودها', nav_settings_sub: 'پیکربندی پنل و API',
  pal_title: 'فرمان‌ها', pal_ph: 'جستجو یا فرمان…', pal_pages: 'صفحه‌ها', pal_settings: 'تنظیمات', pal_actions: 'کارها', pal_nav: 'جابه‌جایی', pal_open: 'باز کردن', pal_search: 'جستجو', pal_none: 'چیزی پیدا نشد',
  shortcuts: 'میان‌برهای صفحه‌کلید', collapse: 'جمع کردن منو', menu: 'منو',
  collecting: 'در حال جمع‌آوری نمونه‌ها…', now: 'اکنون', no_online: 'الان کسی آنلاین نیست', peak: 'اوج', average: 'میانگین', sample_every: 'نمونه هر',
  constellation: 'صورت‌فلکی خروجی‌ها', constellation_sub: 'رنگ = وضعیت و اسکور', open_exit: 'نمایش خروجی',
  new_inbound: 'اینباند جدید', new_inbound_sub: 'اینباند دستی روی یکی از خروجی‌ها', all_inbounds: 'همه اینباندها', search_inbounds: 'جستجوی پروتکل، پورت، کشور…',
  ib_auto: 'خودکار', ib_manual: 'دستی', ib_server: 'سرور', ib_type: 'نوع', bound_exit: 'خروجی متصل', manage: 'مدیریت', all: 'همه', all_exits: 'همه خروجی‌ها',
  ib_auto_hint: 'اینباند پیش‌فرض که با ساخت هر خروجی خودکار ساخته می‌شود', ib_manual_hint: 'اینباندی که دستی اضافه کرده‌اید (قابل حذف)',
  no_protocols: 'پروتکلی در دسترس نیست', port_auto_hint: 'خالی بگذارید تا پنل یک پورت آزاد انتخاب کند',
  ib_manual_note: 'پنل فقط «پروتکل» و «پورت» را برای اینباند دستی می‌پذیرد؛ کلیدها، SNI و گواهی را خود پنل می‌سازد. وایرگارد و اوپن‌وی‌پی‌ان اینباند سطح سرورند و پایین همین صفحه مدیریت می‌شوند.',
  no_match: 'موردی با این فیلتر پیدا نشد', candidates: 'نودهای بررسی‌شده', no_exits_new: 'هنوز خروجی‌ای ساخته نشده — از بخش منابع بالا شکار کنید.',
  swap_confirm: 'نود این خروجی عوض می‌شود و تا پیدا شدن نود تمیز جدید، اتصال کاربران روی آن ممکن است قطع شود.',
  no_flag: 'بدون پرچم', custom_flag_country: 'پرچم (کشور)', nodes_unit: 'نود', exit_sources: 'منابع خروجی',
  view_table: 'نمای جدول', view_cards: 'نمای کارت', search_exits: 'جستجوی کشور، IP…', search_users: 'جستجوی نام یا IP…', search_logs: 'جستجوی کشور یا IP…',
  share_card: 'کارت اشتراک', open_sub: 'باز کردن صفحه اشتراک', reset_confirm: 'مصرف این کاربر صفر می‌شود. این کار برگشت‌ناپذیر است.', download_png: 'دانلود تصویر',
  sub_studio: 'استودیوی اشتراک', sub_studio_sub: 'آنچه کاربر در اپ می‌بیند', sub_backend: 'قابلیت‌های سرور',
  sub_client: 'اپ کاربر', sub_profile_name_note: 'نام پروفایل در اپ (سرور هدر profile-title نمی‌فرستد)', sub_update_every: 'بروزرسانی خودکار هر',
  sub_no_configs: 'هیچ خروجی‌ای به این اشتراک وصل نیست', sub_configs: 'کانفیگ', sub_title_edit: 'نام روی صفحه اشتراک',
  sub_page_title: 'نام کاربر / عنوان صفحه اشتراک', sub_page_title_hint: 'همین نام بالای صفحه اشتراک نمایش داده می‌شود (users/update).',
  sub_configs_in: 'کانفیگ‌های داخل اشتراک', sub_exits_hint: 'نام هر کانفیگ را سرور به شکل «پرچم کشور Score n» می‌سازد.',
  sub_open_page: 'صفحه اشتراک', sub_headers: 'هدرهایی که سرور برای اپ‌ها می‌فرستد', sub_preview: 'پیش‌نمایش زنده',
  sub_cap_name: 'نام کاربر (عنوان صفحه اشتراک) — قابل ویرایش', sub_cap_exits: 'انتخاب کانفیگ‌ها (خروجی‌های کاربر) — قابل ویرایش',
  sub_cap_userinfo: 'حجم و انقضا از طریق هدر Subscription-Userinfo — از ویرایش کاربر', sub_cap_page: 'ظاهر صفحه اشتراک وب — با پوسته جدید همین پنل',
  sub_ro_remark: 'قالب نام کانفیگ‌ها («پرچم کشور Score n») — ثابت در سرور', sub_ro_title: 'عنوان پروفایل (profile-title) — سرور پشتیبانی نمی‌کند',
  sub_ro_interval: 'فاصله بروزرسانی (24 ساعت) — ثابت در سرور',
  set_general: 'عمومی', set_general_sub: 'اسکور هدف، دامنه و پارامترهای پایه', set_automation: 'خودکارسازی', set_automation_sub: 'رفتار خودکار پنل در برابر خروجی‌ها و کاربرها',
  udr_tab_info: 'اطلاعات', udr_tab_sub: 'ساب', udr_open: 'جزئیات کاربر',
  dirty_skip: 'رد کردن نودهای کثیف (دقیقه)', dirty_skip_hint: 'نودی که خروجی‌اش کثیف تأیید شده، در این مدت در همه شکارها آخر صف می‌رود · ۰ = خاموش (رفتار قبلی)',
  telemetry_title: 'آمار نصب ناشناس', telemetry_on: 'ارسال آمار نصب ناشناس',
  telemetry_hint: 'روزی یک بار فقط یک شناسه تصادفی و شماره نسخه پنل فرستاده می‌شود — نه IP کاربران، نه دامنه، نه خروجی‌ها و نه هیچ اطلاعات دیگری.',
  inst_title: 'نصب‌های پنل', inst_sub: 'شمارش ناشناس — بدون IP و بدون دسترسی به پنل‌ها', inst_24h: 'فعال ۲۴ ساعت', inst_7d: 'فعال ۷ روز', inst_30d: 'فعال ۳۰ روز', inst_total: 'کل دیده‌شده', inst_by_ver: 'نسخه‌ها (۳۰ روز):',
  set_announce: 'اطلاعیه همگانی', set_announce_sub: 'یک پیام برای همه کاربران — آخرِ لیست کانفیگ‌های اشتراک و بالای صفحه اشتراک',
  ann_text: 'متن اطلاعیه', ann_hint: 'خالی = بدون اطلاعیه · حداکثر ۲۰۰ کاراکتر، یک خط',
  ann_show: 'نمایش اطلاعیه در اشتراک', ann_show_hint: 'کانفیگ 📢 اول لیست + بنر بالای صفحه اشتراک',
  ann_traffic_show: 'نمایش کانفیگ حجم و روز باقی‌مانده', ann_traffic_hint: 'مثلاً «📊 Traffic: 12.5/50 GB · 18 days left» اول لیست (بعد از 📢)',
  set_hunting: 'کشورهای شکار', set_moo: 'MooProxy', set_notify: 'اعلان تلگرام', set_notify_sub: 'گزارش‌ها و هشدارها به بات تلگرام',
  set_appearance: 'ظاهر', set_appearance_sub: 'پوسته، تراکم، فونت و زبان', appearance_local: 'روی همین مرورگر', appearance_local_hint: 'پوسته و تراکم در مرورگر شما ذخیره می‌شوند و فوری اعمال می‌شوند.',
  appearance_server: 'پیش‌فرض پنل (ذخیره در سرور)', set_proxy: 'پروکسی تلگرام', set_api: 'API', set_security: 'امنیت', set_backup: 'پشتیبان', set_update: 'آپدیت',
  upd_ui_warn: 'آپدیت از مخزن گیت‌هاب، پوشه web را جایگزین می‌کند — اگر این ظاهر جدید در مخزن نباشد، ظاهر قبلی برمی‌گردد.',
  hunt_done: 'تمام شد', hunt_pending_s: 'در انتظار', log_kind: 'نوع', log_outcomes: 'نتایج', no_hunts: 'هنوز شکاری ثبت نشده', hunt_log: 'گزارش شکار', hunt_log_sub: 'آخرین شکارها و نتیجه هر نود',
  auth_tagline: 'خروجی‌های تمیز، کاربرها و پروتکل‌ها — همه در یک پنل.', auth_welcome: 'خوش برگشتی', auth_foot: 'اتصال رمزگذاری‌شده · نشست فقط روی همین مرورگر',

  /* v1.0.25 import from config */
  imp_tab_preset: 'پروتکل آماده', imp_tab_import: 'ورود از کانفیگ', imp_link: 'لینک کانفیگ', imp_parse: 'بررسی لینک',
  imp_link_hint: 'یک لینک vless:// ، vmess:// ، trojan:// ، ss:// یا hysteria2:// بچسبانید — تنظیماتش خوانده و قبل از ساخت نمایش داده می‌شود.',
  imp_net: 'ترنسپورت', imp_sec: 'امنیت', imp_method: 'روش رمزنگاری', imp_port: 'پورت (تصادفی و آزاد)',
  imp_port_hint: 'پورت لینک استفاده نمی‌شود؛ قابل تغییر است (۱۰۰۰۰ تا ۶۰۰۰۰)', imp_orig_port: 'پورت لینک:',
  imp_sni_hint: 'برای TLS همیشه گواهی و دامنهٔ خود پنل استفاده می‌شود؛ برای Reality این SNI سایت پوششی است',
  imp_sid_hint: 'خالی = ساخت shortId جدید',
  imp_note: 'UUID/رمز و کلیدهای لینک کپی نمی‌شوند: هر کاربر پنل اعتبار خودش را دارد، کلید Reality تازه ساخته می‌شود و تغییر بدون ری‌استارت Xray اعمال می‌شود.',
  imp_w_sni_replaced: 'SNI لینک با دامنهٔ پنل فرق دارد — اینباند با گواهی خود پنل ({host}) ساخته می‌شود.',
  imp_w_reality_new_keys: 'جفت‌کلید Reality جدید ساخته می‌شود (SNI و مقصد لینک حفظ می‌شود).',
  imp_w_reality_no_pbk: 'لینک Reality کلید عمومی (pbk) ندارد — مهم نیست، کلید جدید ساخته می‌شود.',
  imp_w_hy2_mport_ignored: 'پورت‌هاپینگ (mport) لینک پشتیبانی نمی‌شود و نادیده گرفته می‌شود.',
  imp_w_xhttp_extra_ignored: 'تنظیمات extra در XHTTP نادیده گرفته می‌شود.',
  imp_w_no_tls_cert: 'گواهی TLS پنل موجود نیست — ساخت این اینباند ممکن نیست.',
  imp_w_no_free_port: 'پورت آزادی پیدا نشد — یک پورت دستی وارد کنید.',
  imp_w_ss_legacy: 'روش قدیمی Shadowsocks (غیر ۲۰۲۲) — کار می‌کند ولی SS2022 امن‌تر است.',
  traffic_mult: 'ضریب حجم', traffic_mult_hint: 'مثلاً ۲ یعنی هر ۱ مگ مصرف واقعی، ۲ مگ حساب می‌شه',
  traffic_mult_future: 'تغییر ضریب فقط روی مصرف از این به بعد اثر دارد؛ مصرف قبلی عوض نمی‌شود.',
  traffic_mult_bad: 'ضریب حجم باید یک عدد مثبت باشد (مثلاً ۲٫۵ یا ۱۵)؛ صفر، منفی و متن قبول نیست',
  traffic_mult_manual: 'ضریب دستی', traffic_mult_manual_ph: 'هر عددی، مثلاً ۲٫۵ یا ۱۵', traffic_mult_set: 'ضریب دستی…',
  traffic_mult_save: 'ثبت ضریب', traffic_mult_saved: 'ضریب حجم ثبت شد',
  traffic_mult_remove: 'حذف ضریب (×۱)', traffic_mult_removed: 'ضریب حجم برداشته شد (×۱)',
  real_usage: 'مصرف واقعی',
  // v1.0.28 — update banner (top of every page)
  updb_avail: 'نسخه‌ی جدید {v} آمده — به‌روزرسانی کنید', updb_btn: 'به‌روزرسانی', updb_details: 'جزئیات',
  updb_dismiss: 'بستن تا نسخه‌ی بعدی', updb_running: 'در حال به‌روزرسانی پنل به {v}…',
  updb_restarting: 'به‌روزرسانی اعمال شد — پنل در حال ری‌استارت است…',
  updb_restart_needed: 'نسخه‌ی {v} نصب شده ولی پنل هنوز نسخه‌ی قبلی را اجرا می‌کند — ری‌استارت لازم است',
  updb_reload: 'بارگذاری دوباره',
  // v1.0.29 — per-inbound CDN (Cloudflare)
  cdn_menu: 'CDN (Cloudflare)…', cdn_title: 'CDN · Cloudflare',
  cdn_sub: 'لینک این اینباند در ساب از مسیر Cloudflare داده می‌شود؛ خود اینباند و Xray تغییری نمی‌کنند',
  cdn_host: 'دامنه‌ی CDN', cdn_host_hint: 'رکورد نارنجی (Proxied) در Cloudflare — همان SNI و Host لینک',
  cdn_port: 'پورت Cloudflare', cdn_addr: 'آدرس اتصال (اختیاری)', cdn_addr_ph: 'خالی = همان دامنه',
  cdn_addr_hint: 'IP تمیز Cloudflare یا یک دامنه؛ خالی بماند = دامنه‌ی CDN',
  cdn_note: 'سرور جلویی (مثلاً nginx) باید این دامنه و پورت را به همین اینباند برساند؛ پنل فقط لینک ساب را عوض می‌کند.',
  cdn_save: 'ذخیره‌ی CDN', cdn_remove: 'حذف CDN',
  cdn_saved: 'CDN ذخیره شد — ساب کاربران به‌روز شد', cdn_removed: 'CDN حذف شد — لینک مستقیم برگشت',
  cdn_confirm_remove: 'لینک این اینباند در ساب به حالت مستقیم برمی‌گردد. ادامه می‌دهید؟',
  cdn_badge_t: 'لینک ساب از طریق Cloudflare',
  cdn_err_host: 'دامنه‌ی CDN نامعتبر است — یک دامنه‌ی کامل بنویسید (مثلاً cdn.example.com)',
  cdn_err_port: 'پورت CDN باید یکی از ۴۴۳، ۲۰۵۳، ۲۰۸۳، ۲۰۸۷، ۲۰۹۶ یا ۸۴۴۳ باشد',
  cdn_err_addr: 'آدرس اتصال نامعتبر است — یک IP یا دامنه بنویسید، یا خالی بگذارید',
  nib_xhttp_hint: 'XHTTP برای عبور از پشت Cloudflare و CDN مناسب است — بعد از ساخت، CDN را از منوی ⋮ همین اینباند تنظیم کنید.',
});
Object.assign(STR.en, {
  server_direct: 'Server · Direct', more_actions: 'More actions', search: 'Search…', choose_file: 'Choose file', choose_ovpn: 'Choose .ovpn file',
  theme: 'Theme', theme_auto: 'Auto', theme_dark: 'Dark', theme_light: 'Light', theme_toggle: 'Toggle theme',
  density: 'Density', density_compact: 'Compact', density_comfortable: 'Comfortable', density_toggle: 'Toggle density',
  unsaved: 'Unsaved changes', unsaved_title: 'Unsaved changes', unsaved_leave: 'You changed settings that are not saved yet. Leave without saving?', discard: 'Discard',
  nav_overview: 'Overview', nav_inbounds: 'Inbounds', nav_exits: 'Exits', nav_users: 'Users', nav_subs: 'Subscription', nav_logs: 'Logs', nav_settings: 'Settings',
  nav_overview_sub: 'Live server health, traffic and exits', nav_inbounds_sub: 'Every inbound in one place — Xray, WireGuard, OpenVPN, Telegram proxy', nav_exits_sub: 'Sources, clean-IP hunts and the exit list',
  nav_users_sub: 'Clients, quota, expiry, links and the subscription studio', nav_subs_sub: 'Subscription studio — live preview and share cards', nav_logs_sub: 'Node hunt history', nav_settings_sub: 'Panel configuration and API',
  pal_title: 'Commands', pal_ph: 'Search or run a command…', pal_pages: 'Pages', pal_settings: 'Settings', pal_actions: 'Actions', pal_nav: 'navigate', pal_open: 'open', pal_search: 'search', pal_none: 'Nothing found',
  shortcuts: 'Keyboard shortcuts', collapse: 'Collapse menu', menu: 'Menu',
  collecting: 'Collecting samples…', now: 'now', no_online: 'Nobody is online right now', peak: 'Peak', average: 'Average', sample_every: 'Sample every',
  constellation: 'Exit constellation', constellation_sub: 'colour = status & score', open_exit: 'Show exit',
  new_inbound: 'New inbound', new_inbound_sub: 'A manual inbound on one of your exits', all_inbounds: 'All inbounds', search_inbounds: 'Search protocol, port, country…',
  ib_auto: 'Auto', ib_manual: 'Manual', ib_server: 'Server', ib_type: 'Type', bound_exit: 'Bound exit', manage: 'Manage', all: 'All', all_exits: 'All exits',
  ib_auto_hint: 'default inbound created automatically with every exit', ib_manual_hint: 'an inbound you added by hand (removable)',
  no_protocols: 'No protocol available', port_auto_hint: 'Leave empty and the panel picks a free port',
  ib_manual_note: 'The panel accepts only “protocol” and “port” for a manual inbound; keys, SNI and certificates are generated by the panel. WireGuard and OpenVPN are server-level inbounds managed further down this page.',
  no_match: 'Nothing matches this filter', candidates: 'Checked nodes', no_exits_new: 'No exits yet — hunt one from the sources above.',
  swap_confirm: 'This exit’s node will be replaced; users on it may lose connection until a new clean node is found.',
  no_flag: 'No flag', custom_flag_country: 'Flag (country)', nodes_unit: 'nodes', exit_sources: 'Exit sources',
  view_table: 'Table view', view_cards: 'Card view', search_exits: 'Search country, IP…', search_users: 'Search name or IP…', search_logs: 'Search country or IP…',
  share_card: 'Share card', open_sub: 'Open subscription page', reset_confirm: 'This user’s usage will be reset to zero. This cannot be undone.', download_png: 'Download image',
  sub_studio: 'Subscription studio', sub_studio_sub: 'what the user sees in their app', sub_backend: 'Server capabilities',
  sub_client: 'Client app', sub_profile_name_note: 'profile name in the app (the server sends no profile-title header)', sub_update_every: 'Auto-update every',
  sub_no_configs: 'No exit is attached to this subscription', sub_configs: 'configs', sub_title_edit: 'Name on the subscription page',
  sub_page_title: 'User name / subscription page title', sub_page_title_hint: 'This name is shown at the top of the subscription page (users/update).',
  sub_configs_in: 'Configs in this subscription', sub_exits_hint: 'The server names each config “flag country Score n”.',
  sub_open_page: 'Subscription page', sub_headers: 'Headers the server sends to apps', sub_preview: 'Live preview',
  sub_cap_name: 'User name (subscription page title) — editable', sub_cap_exits: 'Which configs (the user’s exits) — editable',
  sub_cap_userinfo: 'Quota & expiry via Subscription-Userinfo — from the user editor', sub_cap_page: 'Web subscription page look — uses this panel’s new theme',
  sub_ro_remark: 'Config name format (“flag country Score n”) — fixed by the server', sub_ro_title: 'Profile title (profile-title) — not supported by the server',
  sub_ro_interval: 'Update interval (24h) — fixed by the server',
  set_general: 'General', set_general_sub: 'Target score, domain and basics', set_automation: 'Automation', set_automation_sub: 'How the panel reacts to exits and users on its own',
  udr_tab_info: 'Details', udr_tab_sub: 'Subscription', udr_open: 'User details',
  dirty_skip: 'Skip dirty nodes (minutes)', dirty_skip_hint: 'A node whose exit was verified dirty goes to the end of every hunt queue for this long · 0 = off (old behaviour)',
  telemetry_title: 'Anonymous install stats', telemetry_on: 'Send anonymous install stats',
  telemetry_hint: 'Once a day only a random id and the panel version are sent — no user IPs, no domain, no exits, nothing else.',
  inst_title: 'Panel installs', inst_sub: 'anonymous count — no IPs, no access to the panels', inst_24h: 'Active 24h', inst_7d: 'Active 7 days', inst_30d: 'Active 30 days', inst_total: 'Total seen', inst_by_ver: 'Versions (30 days):',
  set_announce: 'Global announcement', set_announce_sub: 'One message for every user — at the end of the subscription config list and the top of the subscription page',
  ann_text: 'Announcement text', ann_hint: 'Empty = no announcement · max 200 characters, one line',
  ann_show: 'Show announcement in subscriptions', ann_show_hint: '📢 config at the top of the list + banner on the subscription page',
  ann_traffic_show: 'Show traffic & days-left config', ann_traffic_hint: 'e.g. “📊 Traffic: 12.5/50 GB · 18 days left” at the top of the list (after 📢)',
  set_hunting: 'Hunt countries', set_moo: 'MooProxy', set_notify: 'Telegram alerts', set_notify_sub: 'Reports and alerts to a Telegram bot',
  set_appearance: 'Appearance', set_appearance_sub: 'Theme, density, font and language', appearance_local: 'On this browser', appearance_local_hint: 'Theme and density are stored in your browser and apply instantly.',
  appearance_server: 'Panel defaults (saved on server)', set_proxy: 'Telegram proxy', set_api: 'API', set_security: 'Security', set_backup: 'Backup', set_update: 'Update',
  upd_ui_warn: 'Updating from the GitHub repo replaces the web folder — if this new UI is not in the repo, the old UI comes back.',
  hunt_done: 'Done', hunt_pending_s: 'Pending', log_kind: 'Kind', log_outcomes: 'Outcomes', no_hunts: 'No hunts recorded yet', hunt_log: 'Hunt log', hunt_log_sub: 'Recent hunts and each node’s result',
  auth_tagline: 'Clean exits, users and protocols — one panel.', auth_welcome: 'Welcome back', auth_foot: 'Encrypted connection · session stays in this browser',

  /* v1.0.25 import from config */
  imp_tab_preset: 'Preset protocol', imp_tab_import: 'Import from config', imp_link: 'Config link', imp_parse: 'Check link',
  imp_link_hint: 'Paste a vless://, vmess://, trojan://, ss:// or hysteria2:// link — its settings are read and shown before anything is created.',
  imp_net: 'Transport', imp_sec: 'Security', imp_method: 'Method', imp_port: 'Port (random, free)',
  imp_port_hint: 'The link’s port is never reused; editable (10000–60000)', imp_orig_port: 'link port:',
  imp_sni_hint: 'TLS always uses the panel’s own certificate and domain; for Reality this SNI is the camouflage site',
  imp_sid_hint: 'empty = generate a new shortId',
  imp_note: 'The link’s UUID/password and keys are never copied: every panel user keeps its own credentials, a fresh Reality key pair is generated and the change is applied without restarting Xray.',
  imp_w_sni_replaced: 'The link’s SNI differs from the panel domain — the inbound uses the panel’s own certificate ({host}).',
  imp_w_reality_new_keys: 'A new Reality key pair is generated (the link’s SNI/dest are kept).',
  imp_w_reality_no_pbk: 'The Reality link has no public key (pbk) — fine, a new key is generated.',
  imp_w_hy2_mport_ignored: 'Port hopping (mport) is not supported and is ignored.',
  imp_w_xhttp_extra_ignored: 'XHTTP “extra” settings are ignored.',
  imp_w_no_tls_cert: 'The panel TLS certificate is missing — this inbound cannot be built.',
  imp_w_no_free_port: 'No free port found — enter one manually.',
  imp_w_ss_legacy: 'Legacy (non-2022) Shadowsocks method — works, but SS2022 is safer.',
  traffic_mult: 'Traffic multiplier', traffic_mult_hint: 'e.g. 2 means every 1 MB of real usage counts as 2 MB',
  traffic_mult_future: 'A new multiplier applies to future traffic only; usage already counted is not changed.',
  traffic_mult_bad: 'Traffic multiplier must be a positive number (e.g. 2.5 or 15); 0, negative and text are not allowed',
  traffic_mult_manual: 'Manual multiplier', traffic_mult_manual_ph: 'any number, e.g. 2.5 or 15', traffic_mult_set: 'Manual multiplier…',
  traffic_mult_save: 'Save multiplier', traffic_mult_saved: 'Traffic multiplier saved',
  traffic_mult_remove: 'Remove multiplier (×1)', traffic_mult_removed: 'Traffic multiplier removed (×1)',
  real_usage: 'Real usage',
  updb_avail: 'New version {v} is out — please update', updb_btn: 'Update', updb_details: 'Details',
  updb_dismiss: 'Hide until the next version', updb_running: 'Updating the panel to {v}…',
  updb_restarting: 'Update applied — the panel is restarting…',
  updb_restart_needed: 'Version {v} is installed but the panel still runs the old one — a restart is needed',
  updb_reload: 'Reload',
  cdn_menu: 'CDN (Cloudflare)…', cdn_title: 'CDN · Cloudflare',
  cdn_sub: 'This inbound\'s subscription link goes through Cloudflare; the inbound and Xray stay unchanged',
  cdn_host: 'CDN hostname', cdn_host_hint: 'An orange-cloud (Proxied) record in Cloudflare — used as the link SNI and Host',
  cdn_port: 'Cloudflare port', cdn_addr: 'Connect address (optional)', cdn_addr_ph: 'empty = the hostname',
  cdn_addr_hint: 'A clean Cloudflare IP or a hostname; empty = the CDN hostname',
  cdn_note: 'The front server (e.g. nginx) must route this hostname and port to this inbound; the panel only changes the subscription link.',
  cdn_save: 'Save CDN', cdn_remove: 'Remove CDN',
  cdn_saved: 'CDN saved — user subscriptions updated', cdn_removed: 'CDN removed — the direct link is back',
  cdn_confirm_remove: 'This inbound\'s subscription link goes back to direct. Continue?',
  cdn_badge_t: 'Subscription link via Cloudflare',
  cdn_err_host: 'Invalid CDN hostname — enter a full domain (e.g. cdn.example.com)',
  cdn_err_port: 'CDN port must be one of 443, 2053, 2083, 2087, 2096, 8443',
  cdn_err_addr: 'Invalid connect address — enter an IP or a hostname, or leave it empty',
  nib_xhttp_hint: 'XHTTP works well behind Cloudflare/a CDN — after creating it, set «CDN (Cloudflare)…» from this inbound\'s ⋮ menu.',
});
//ENDX
/* =====================================================================
   Clean Exit Panel — UI v2 ("Signal" redesign)
   Core: state, formatting, API, flags, icons and shared components.
   Every API path / payload is unchanged from the v1.0.22 UI.
   ===================================================================== */
let LANG = localStorage.getItem('cp_lang') || 'fa';
let THEME = localStorage.getItem('cp_theme') || 'auto';
let SETTINGS = null;
let PROTOCOLS = [];
const HUNT_SEL = { vpngate: new Set(), moo: new Set() };
let curView = 'overview';
let refreshTimer = null;
const t = (k) => (STR[LANG] && STR[LANG][k]) || (STR.fa && STR.fa[k]) || k;
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function esc(s) { return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
const isTyping = (root) => {
  const ae = document.activeElement;
  if (!ae || !root || !root.contains(ae)) return false;
  const tag = ae.tagName, type = (ae.type || '').toLowerCase();
  if (tag === 'TEXTAREA' || tag === 'SELECT') return true;
  return tag === 'INPUT' && !['checkbox', 'radio', 'button', 'submit'].includes(type);
};

/* ---------------- formatting (one numeral style: latin digits) ---------------- */
const LOCALE = () => (LANG === 'fa' ? 'fa-IR-u-nu-latn' : 'en-GB');
function gb(bytes) { return ((bytes || 0) / 1073741824).toFixed(2) + ' GB'; }
function fmtBytes(b) {
  b = Math.max(0, b || 0);
  if (b >= 1073741824) return gb(b);
  if (b >= 1048576) return (b / 1048576).toFixed(1) + ' MB';
  if (b >= 1024) return (b / 1024).toFixed(1) + ' KB';
  return Math.round(b) + ' B';
}
function fmtRate(bps) {
  if (bps >= 1048576) return (bps / 1048576).toFixed(2) + ' MB' + t('per_sec');
  if (bps >= 1024) return (bps / 1024).toFixed(1) + ' KB' + t('per_sec');
  return Math.round(bps || 0) + ' B' + t('per_sec');
}
function fmtElapsed(s) {
  s = Math.max(0, parseInt(s || 0));
  const m = Math.floor(s / 60), ss = s % 60;
  return `${String(m).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}
function fmtDur(s) {
  s = Math.max(0, Math.floor(s || 0));
  if (s >= 86400) return `${Math.floor(s / 86400)}d ${Math.floor((s % 86400) / 3600)}h`;
  if (s >= 3600) return `${Math.floor(s / 3600)}h ${String(Math.floor((s % 3600) / 60)).padStart(2, '0')}m`;
  return fmtElapsed(s);
}
function fmtDate(ts) { return ts ? new Date(ts * 1000).toLocaleDateString(LOCALE()) : '—'; }
function relTime(ts) {
  if (!ts) return '—';
  const diff = Math.max(0, Math.floor(Date.now() / 1000) - ts);
  if (diff < 90) return t('just_now');
  if (diff < 3600) return `${Math.floor(diff / 60)} ${t('min_ago')}`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} ${t('hour_ago')}`;
  return fmtDate(ts);
}
function fmtExpiry(v) {
  if (v === null || v === undefined || v === '' || v === 0) return null;
  const d = typeof v === 'number' ? new Date(v < 1e11 ? v * 1000 : v) : new Date(v);
  if (Number.isNaN(d.getTime())) return String(v);
  return d.toLocaleString(LOCALE());
}
function fmtEst(h) {
  if (!h || h.est_low_s === null || h.est_low_s === undefined) return t('estimating');
  if (h.est_high_s <= 90) return `≈1 ${t('mins')}`;
  const lo = Math.max(1, Math.round(h.est_low_s / 60));
  const hi = Math.max(lo + 1, Math.round(h.est_high_s / 60));
  return `${lo}–${hi} ${t('mins')}`;
}
const ltr = (v) => `<bdi dir="ltr" class="ltr">${esc(v)}</bdi>`;
const code = (v) => `<code class="mono" dir="ltr">${esc(v)}</code>`;

/* ---------------- API (unchanged contract) ---------------- */
async function api(method, path, body) {
  const r = await fetch(BASE + '/api/' + path, {
    method, credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json', 'X-Lang': LANG },
    body: body ? JSON.stringify(body) : undefined,
  });
  let j = {};
  try { j = await r.json(); } catch (e) {}
  if (!r.ok || j.ok === false) {
    const msg = j.msg || (LANG === 'en' ? j.en : j.fa) || j.error || t('err_generic');
    const err = new Error(msg); err.data = j; throw err;
  }
  return j;
}
async function waitForServerThenReload() {
  for (let i = 0; i < 90; i++) {
    await sleep(1000);
    try { await api('GET', 'auth/state'); break; } catch (e) { /* still down */ }
  }
  window.location.reload();
}

/* ---------------- flags: bundled SVGs (no emoji) ---------------- */
const FLAG_SET = new Set('ad ae af ag ai al am ao aq ar as at au aw ax az ba bb bd be bf bg bh bi bj bl bm bn bo bq br bs bt bv bw by bz ca cc cd cf cg ch ci ck cl cm cn co cr cu cv cw cx cy cz de dj dk dm do dz ec ee eg eh er es et eu fi fj fk fm fo fr ga gb gd ge gf gg gh gi gl gm gn gp gq gr gs gt gu gw gy hk hm hn hr ht hu id ie il im in io iq ir is it je jm jo jp ke kg kh ki km kn kp kr kw ky kz la lb lc li lk lr ls lt lu lv ly ma mc md me mf mg mh mk ml mm mn mo mp mq mr ms mt mu mv mw mx my mz na nc ne nf ng ni nl no np nr nu nz om pa pe pf pg ph pk pl pm pn pr ps pt pw py qa re ro rs ru rw sa sb sc sd se sg sh si sj sk sl sm sn so sr ss st sv sx sy sz tc td tf tg th tj tk tl tm tn to tr tt tv tw tz ua ug um un us uy uz va vc ve vg vi vn vu wf ws xk ye yt za zm zw'.split(' '));
const _dn = {};
function ccName(cc, fallback) {
  if (!cc || cc.length !== 2) return fallback || cc || '';
  try {
    if (!_dn[LANG]) _dn[LANG] = new Intl.DisplayNames([LANG === 'fa' ? 'fa' : 'en'], { type: 'region' });
    const n = _dn[LANG].of(cc.toUpperCase());
    if (n && n !== cc.toUpperCase()) return n;
  } catch (e) {}
  return fallback || cc;
}
function emojiToCc(s) {
  const cps = [...String(s || '').trim()].map((c) => c.codePointAt(0));
  if (cps.length === 2 && cps.every((c) => c >= 0x1F1E6 && c <= 0x1F1FF)) return String.fromCharCode(cps[0] - 0x1F1E6 + 65, cps[1] - 0x1F1E6 + 65);
  return '';
}
function ccToEmoji(cc) {
  if (!cc || cc.length !== 2) return '';
  return cc.toUpperCase().split('').map((c) => String.fromCodePoint(0x1F1E6 + c.charCodeAt(0) - 65)).join('');
}
function flagImg(cc, cls) {
  const k = String(cc || '').toLowerCase();
  if (!FLAG_SET.has(k)) return `<span class="flag flag-none ${cls || ''}">${icon('globe')}</span>`;
  return `<img class="flag ${cls || ''}" src="static/flags/${k}.svg" alt="${esc(k.toUpperCase())}" loading="lazy" decoding="async">`;
}
// Compatibility name used by older call-sites
function flag(cc) { return flagImg(cc); }

/* ---------------- inline SVG icon set ---------------- */
const ICONS = {
  overview: '<path d="M4 13h6V4H4zM14 20h6v-9h-6zM4 20h6v-3H4zM14 7h6V4h-6z"/>',
  inbound: '<path d="M4 12h11M11 7l5 5-5 5"/><path d="M20 4v16"/>',
  exit: '<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.5 2.5M16.5 16.5L19 19M19 5l-2.5 2.5M7.5 16.5L5 19"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.5 3.3-5.5 6.5-5.5s5.9 2 6.5 5.5"/><path d="M16 4.5a3.5 3.5 0 010 7M18 14.8c1.9.8 3.1 2.5 3.5 5.2"/>',
  settings: '<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  logs: '<path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/>',
  search: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  more: '<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
  trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 00-1-1H5a1 1 0 00-1 1v10a1 1 0 001 1h3"/>',
  qr: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><path d="M14 14h2v2h-2zM18 18h2v2h-2zM14 18h2M18 14h2"/>',
  link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  ext: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>',
  eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff: '<path d="M3 3l18 18M10.6 5.1A10 10 0 0112 5c6.4 0 10 7 10 7a17 17 0 01-3.2 4.1M6.6 6.6C3.8 8.4 2 12 2 12s3.6 7 10 7a9.6 9.6 0 004.4-1.1M9.9 9.9a3 3 0 004.2 4.2"/>',
  refresh: '<path d="M20 11a8 8 0 10-2.3 5.7M20 4v7h-7"/>',
  swap: '<path d="M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7"/>',
  power: '<path d="M12 3v9M6.3 7a8 8 0 1011.4 0"/>',
  check: '<path d="M4 12.5l5 5L20 6.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  chev: '<path d="M6 9l6 6 6-6"/>',
  chevside: '<path d="M9 6l6 6-6 6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
  auto: '<circle cx="12" cy="12" r="8.5"/><path d="M12 3.5v17A8.5 8.5 0 0012 3.5z" fill="currentColor" stroke="none"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  server: '<rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  upload: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>',
  grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  rows: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  logout: '<path d="M15 4h3a2 2 0 012 2v12a2 2 0 01-2 2h-3M10 8l-4 4 4 4M6 12h10"/>',
  lang: '<path d="M4 5h9M8.5 3v2M6 5c.6 3.4 2.6 6.3 6 8M11 5c-.8 3.8-3.3 7-7 9"/><path d="M13 21l4-10 4 10M14.5 17.5h5"/>',
  send: '<path d="M21 3L3 10.5l7 2.5 2.5 7z"/><path d="M21 3l-11 10"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  signal: '<path d="M2 12h3l3-7 4 14 3-9 2 2h5"/>',
  edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  play: '<path d="M7 4.5v15l13-7.5z"/>',
  stop: '<rect x="6" y="6" width="12" height="12" rx="2"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  file: '<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/>',
  alert: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18h.01"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5h.01"/>',
  palette: '<path d="M12 3a9 9 0 100 18c1.2 0 1.8-.8 1.8-1.7 0-1.4-1.2-1.6-1.2-2.8 0-1 .8-1.5 1.8-1.5H17a4 4 0 004-4c0-4.4-4-8-9-8z"/><circle cx="7.5" cy="11" r="1"/><circle cx="10.5" cy="7" r="1"/><circle cx="15.5" cy="7.5" r="1"/>',
  database: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.5"/><path d="M4.5 5.5v13c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-13M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5"/>',
  code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  sliders: '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
  radar: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="M12 12l6-6"/>',
  sidebar: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  wg: '<path d="M12 3c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9z"/><path d="M7.5 13.5c1.5-3 5.5-4.5 9-2.5M8 16.5c2.5-1 5-.8 7 .5M10 8.5c1 .6 2.5.7 3.5.2"/>',
  ovpn: '<circle cx="12" cy="10" r="6.5"/><path d="M10 13.5l-1.5 7.5h7L14 13.5"/><circle cx="12" cy="10" r="2.2"/>',
  tg: '<path d="M21.5 4L2.5 11.3l6 2.2 2.2 6.5 3.4-4 5 3.7z"/><path d="M8.5 13.5L19 6.5l-8.3 9.2"/>',
  megaphone: '<path d="M3 10v4h3l7 5V5L6 10z"/><path d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"/>',
  hunt: '<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2M11 8v6M8 11h6"/>',
};
function icon(n, cls) {
  return `<svg class="ic ${cls || ''}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[n] || ICONS.info}</svg>`;
}

/* ---------------- small components ---------------- */
// key/value pair with a real gap — no more "labelvalue" concatenation
function kv(k, v, opt) {
  opt = opt || {};
  const val = opt.raw ? v : (opt.ltr ? ltr(v) : esc(v));
  return `<span class="kv${opt.cls ? ' ' + opt.cls : ''}"><span class="kv-k">${esc(k)}</span><span class="kv-v">${val}</span></span>`;
}
function pill(text, tone, opt) {
  opt = opt || {};
  return `<span class="pill pill-${tone || 'mute'}">${opt.dot ? '<i class="pill-dot"></i>' : ''}${opt.raw ? text : esc(text)}</span>`;
}
function scoreBadge(score) {
  if (score === null || score === undefined) return pill('?', 'mute');
  const target = SETTINGS ? SETTINGS.target_score : 0;
  return `<span class="score ${score <= target ? 'score-ok' : 'score-bad'}" title="${esc(t('score'))}"><span class="score-k">${esc(t('score'))}</span><b dir="ltr">${esc(score)}</b></span>`;
}
const STATUS_TONE = { up: ['ok', 'st_up'], dirty: ['bad', 'st_dirty'], down: ['bad', 'st_down'], connecting: ['warn', 'st_connecting'], searching: ['warn', 'st_searching'] };
function statusBadge(st) {
  const m = STATUS_TONE[st] || ['mute', null];
  return pill(m[1] ? t(m[1]) : st, m[0], { dot: true });
}
function exitTypeLabel(e) {
  if (e.type === 'moo') return t('moo_badge');
  if (e.type === 'custom') return t('custom_badge');
  if (e.type === 'direct') return t('direct_badge');
  return 'VPN Gate';
}
// Visual identity of an exit: flag image + proper (localized) name
function exitFlag(e, cls) {
  if (!e) return flagImg('', cls);
  if (e.type === 'direct') return `<span class="flag flag-none ${cls || ''}">${icon('server')}</span>`;
  if (e.type === 'custom') return flagImg(emojiToCc(e.flag), cls);
  return flagImg(e.country, cls);
}
function exitName(e) {
  if (!e) return '—';
  if (e.type === 'direct') return t('server_direct');
  if (e.type === 'custom') return e.label || e.remark || 'Custom';
  return ccName(e.country, e.country_name || e.country);
}
function exitLabel(e) { return `<span class="xl">${exitFlag(e)}<span class="xl-n">${esc(exitName(e))}</span></span>`; }
function exitChip(e) {
  const tone = e.status === 'up' ? 'ok' : (e.status === 'searching' || e.status === 'connecting') ? 'warn' : 'bad';
  return `<span class="xchip xchip-${tone}">${exitFlag(e)}<span>${esc(exitName(e))}</span></span>`;
}
function skeleton(n, h) { return Array.from({ length: n || 3 }, () => `<div class="skel" style="height:${h || 64}px"></div>`).join(''); }
function emptyState(msg, ic) { return `<div class="empty">${icon(ic || 'sparkle', 'empty-ic')}<p>${esc(msg)}</p></div>`; }
function errorBox(msg) { return `<div class="errbox">${icon('alert')}<span>${esc(msg)}</span></div>`; }
function meterBar(pct, tone) {
  const p = Math.max(0, Math.min(100, pct || 0));
  return `<span class="mbar mbar-${tone || (p >= 100 ? 'bad' : p >= 80 ? 'warn' : 'ok')}"><i style="inline-size:${p.toFixed(1)}%"></i></span>`;
}

/* ---------------- toasts ---------------- */
function toast(msg, err) {
  const host = $('#toasts');
  if (!host) return;
  const el = document.createElement('div');
  el.className = 'toast ' + (err ? 'toast-err' : 'toast-ok');
  el.setAttribute('role', 'status');
  el.innerHTML = `${icon(err ? 'alert' : 'check')}<span></span>`;
  el.querySelector('span').textContent = msg;
  host.appendChild(el);
  requestAnimationFrame(() => el.classList.add('in'));
  setTimeout(() => { el.classList.remove('in'); setTimeout(() => el.remove(), 300); }, err ? 5200 : 3200);
}
async function copyText(txt, btn) {
  try { await navigator.clipboard.writeText(txt); }
  catch (e) {
    const ta = document.createElement('textarea');
    ta.value = txt; document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); ta.remove();
  }
  if (btn) {
    btn.classList.add('copied');
    const lbl = btn.querySelector('.btn-l');
    const o = lbl ? lbl.textContent : null;
    if (lbl) lbl.textContent = t('copied');
    setTimeout(() => { btn.classList.remove('copied'); if (lbl) lbl.textContent = o; }, 1400);
  } else toast(t('copied'));
}
function downloadText(filename, text) {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}
function drawQr(cv, text) {
  if (!window.qrcode) { cv.style.display = 'none'; return; }
  try {
    qrcode.stringtoBytesFuncs['UTF-8'] = function (s) { const b = []; for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); if (c < 128) b.push(c); else if (c < 2048) { b.push(192 | (c >> 6), 128 | (c & 63)); } else { b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63)); } } return b; };
  } catch (e) {}
  try {
    const qr = qrcode(0, 'M'); qr.addData(text); qr.make();
    const n = qr.getModuleCount(), cell = 4, pad = cell * 3;
    cv.width = cv.height = n * cell + pad * 2;
    const g = cv.getContext('2d');
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, cv.width, cv.height);
    g.fillStyle = '#0b0d11';
    for (let r = 0; r < n; r++) for (let col = 0; col < n; col++)
      if (qr.isDark(r, col)) g.fillRect(pad + col * cell, pad + r * cell, cell, cell);
    cv.style.display = '';
  } catch (e) { cv.style.display = 'none'; }
}

/* ---------------- buttons ---------------- */
// btn(label, {icon, kind: 'pri'|'ghost'|'danger'|'soft', act, attrs, sm, iconOnly, title})
function btn(label, o) {
  o = o || {};
  const cls = ['btn', 'btn-' + (o.kind || 'soft')];
  if (o.sm) cls.push('btn-sm');
  if (o.iconOnly) cls.push('btn-icon');
  if (o.block) cls.push('btn-block');
  const a = o.act ? ` data-act="${o.act}"` : '';
  const title = o.iconOnly || o.title ? ` title="${esc(o.title || label)}" aria-label="${esc(o.title || label)}"` : '';
  return `<button type="button" class="${cls.join(' ')}"${a}${title} ${o.attrs || ''}>${o.icon ? icon(o.icon) : ''}${o.iconOnly ? '' : `<span class="btn-l">${esc(label)}</span>`}</button>`;
}

/* ---------------- delegated actions ---------------- */
const ACT = {};
document.addEventListener('click', (ev) => {
  const el = ev.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const fn = ACT[el.dataset.act];
  if (fn) { ev.preventDefault(); fn(el, ev); }
});

/* ---------------- overflow menu ---------------- */
const MENUS = new Map();
let menuSeq = 0;
function menuBtn(items, o) {
  o = o || {};
  const id = 'm' + (++menuSeq);
  MENUS.set(id, items.filter(Boolean));
  if (MENUS.size > 600) { const k = MENUS.keys().next().value; MENUS.delete(k); }
  return `<button type="button" class="btn btn-ghost btn-icon btn-sm menu-trigger" data-menu="${id}" aria-haspopup="menu" title="${esc(o.title || t('more_actions'))}" aria-label="${esc(o.title || t('more_actions'))}">${icon('more')}</button>`;
}
function closeMenu() { const m = $('#popMenu'); if (m) m.remove(); }
document.addEventListener('click', (ev) => {
  const trg = ev.target.closest('[data-menu]');
  if (!trg) { if (!ev.target.closest('#popMenu')) closeMenu(); return; }
  ev.preventDefault(); ev.stopPropagation();
  const open = $('#popMenu');
  if (open && open.dataset.for === trg.dataset.menu) { closeMenu(); return; }
  closeMenu();
  const items = MENUS.get(trg.dataset.menu) || [];
  const m = document.createElement('div');
  m.id = 'popMenu'; m.className = 'popmenu'; m.setAttribute('role', 'menu');
  m.dataset.for = trg.dataset.menu;
  items.forEach((it, i) => {
    if (it === '-') { m.insertAdjacentHTML('beforeend', '<div class="pm-sep"></div>'); return; }
    m.insertAdjacentHTML('beforeend', `<button type="button" role="menuitem" class="pm-item ${it.danger ? 'pm-danger' : ''}" data-i="${i}">${icon(it.icon || 'chevside')}<span>${esc(it.label)}</span></button>`);
  });
  document.body.appendChild(m);
  const r = trg.getBoundingClientRect(), mr = m.getBoundingClientRect();
  const rtl = document.documentElement.dir === 'rtl';
  let left = rtl ? r.left : r.right - mr.width;
  left = Math.max(8, Math.min(window.innerWidth - mr.width - 8, left));
  let top = r.bottom + 6;
  if (top + mr.height > window.innerHeight - 8) top = Math.max(8, r.top - mr.height - 6);
  m.style.left = left + 'px'; m.style.top = top + 'px';
  m.addEventListener('click', (e) => {
    const b = e.target.closest('.pm-item');
    if (!b) return;
    const it = items[+b.dataset.i];
    closeMenu();
    if (it && it.run) it.run();
  });
  const first = m.querySelector('.pm-item'); if (first) first.focus();
});
window.addEventListener('resize', closeMenu);
window.addEventListener('scroll', closeMenu, true);

/* ---------------- modal / sheet ---------------- */
const MODAL_STACK = [];
function openModal({ title, sub, body, footer, size, onClose, icon: ic }) {
  const ov = document.createElement('div');
  ov.className = 'modal-ov';
  ov.innerHTML = `<div class="modal modal-${size || 'md'}" role="dialog" aria-modal="true">
    <header class="modal-h">
      ${ic ? `<span class="modal-ic">${icon(ic)}</span>` : ''}
      <div class="modal-ht"><h3></h3>${sub ? '<p></p>' : ''}</div>
      <button type="button" class="btn btn-ghost btn-icon btn-sm modal-x" aria-label="${esc(t('close'))}">${icon('x')}</button>
    </header>
    <div class="modal-b"></div>
    ${footer ? '<footer class="modal-f"></footer>' : ''}
  </div>`;
  ov.querySelector('h3').textContent = title || '';
  if (sub) ov.querySelector('.modal-ht p').textContent = sub;
  ov.querySelector('.modal-b').innerHTML = body || '';
  if (footer) ov.querySelector('.modal-f').innerHTML = footer;
  document.body.appendChild(ov);
  document.body.classList.add('has-modal');
  requestAnimationFrame(() => ov.classList.add('in'));
  const api_ = { el: ov, body: ov.querySelector('.modal-b'), closed: false };
  api_.close = (v) => {
    if (api_.closed) return; api_.closed = true;
    ov.classList.remove('in');
    const i = MODAL_STACK.indexOf(api_); if (i >= 0) MODAL_STACK.splice(i, 1);
    if (!MODAL_STACK.length) document.body.classList.remove('has-modal');
    setTimeout(() => ov.remove(), 220);
    if (onClose) onClose(v);
  };
  ov.addEventListener('mousedown', (e) => { if (e.target === ov) api_.close(false); });
  ov.querySelector('.modal-x').addEventListener('click', () => api_.close(false));
  MODAL_STACK.push(api_);
  enhanceSelects(ov);
  setTimeout(() => { const f = ov.querySelector('.modal-b input:not([type=checkbox]):not([readonly]), .modal-b textarea'); if (f) f.focus(); }, 60);
  return api_;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if ($('#popMenu')) { closeMenu(); return; }
    if ($('.dd-panel')) { closeDD(); return; }
    const top = MODAL_STACK[MODAL_STACK.length - 1];
    if (top) top.close(false);
  }
});
// Generic confirm dialog (replaces every native confirm()).
function confirmModal({ title, bodyHtml, okText, danger }) {
  return new Promise((resolve) => {
    const m = openModal({
      title, size: 'sm', icon: danger ? 'alert' : 'info', body: bodyHtml || '',
      footer: `${btn(t('cancel'), { kind: 'ghost', attrs: 'data-cf="0"' })}${btn(okText || t('del'), { kind: danger ? 'danger' : 'pri', attrs: 'data-cf="1"', icon: danger ? 'trash' : 'check' })}`,
      onClose: (v) => resolve(!!v),
    });
    m.el.classList.toggle('modal-danger', !!danger);
    m.el.querySelectorAll('[data-cf]').forEach((b) => b.addEventListener('click', () => m.close(b.dataset.cf === '1')));
    setTimeout(() => { const ok = m.el.querySelector('[data-cf="1"]'); if (ok) ok.focus(); }, 80);
  });
}

/* ---------------- custom searchable dropdown (replaces native <select>) ----------------
   The native <select> stays in the DOM (hidden) and keeps its id, value
   and 'change' events, so all existing logic keeps working. Options can
   carry data-cc (flag), data-icon and data-sub (secondary text). */
let DD_OPEN = null;
function ddLabelHtml(opt) {
  if (!opt) return `<span class="dd-ph">—</span>`;
  const lead = opt.dataset.cc !== undefined ? flagImg(opt.dataset.cc) : opt.dataset.icon ? `<span class="flag flag-none">${icon(opt.dataset.icon)}</span>` : '';
  const sub = opt.dataset.sub ? `<span class="dd-sub" dir="auto">${esc(opt.dataset.sub)}</span>` : '';
  return `${lead}<span class="dd-t">${esc(opt.dataset.label || opt.textContent)}</span>${sub}`;
}
function syncDD(sel) {
  if (!sel || !sel._dd) return;
  const b = sel._dd;
  b.innerHTML = `<span class="dd-v">${ddLabelHtml(sel.options[sel.selectedIndex])}</span>${icon('chev', 'dd-chev')}`;
  b.disabled = sel.disabled;
}
function enhanceSelect(sel) {
  if (!sel || sel._dd || sel.multiple) return;
  const b = document.createElement('button');
  b.type = 'button'; b.className = 'dd'; b.setAttribute('aria-haspopup', 'listbox');
  if (sel.id) b.dataset.for = sel.id;
  sel.classList.add('dd-native'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
  sel.after(b);
  sel._dd = b;
  syncDD(sel);
  new MutationObserver(() => syncDD(sel)).observe(sel, { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled'] });
  sel.addEventListener('change', () => syncDD(sel));
  b.addEventListener('click', (e) => { e.stopPropagation(); if (DD_OPEN && DD_OPEN.sel === sel) closeDD(); else openDD(sel); });
  b.addEventListener('keydown', (e) => { if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openDD(sel); } });
}
function enhanceSelects(root) { $$('select', root || document).forEach(enhanceSelect); }
function closeDD() { if (DD_OPEN) { DD_OPEN.panel.remove(); DD_OPEN.sel._dd.classList.remove('open'); DD_OPEN = null; } }
function openDD(sel) {
  closeDD(); closeMenu();
  const opts = [...sel.options];
  const panel = document.createElement('div');
  panel.className = 'dd-panel'; panel.setAttribute('role', 'listbox');
  const searchable = opts.length > 7;
  panel.innerHTML = `${searchable ? `<div class="dd-search">${icon('search')}<input type="text" placeholder="${esc(t('search_countries').replace('کشور', '').replace('countries', '') || t('search'))}" autocomplete="off"></div>` : ''}<div class="dd-list"></div>`;
  const list = panel.querySelector('.dd-list');
  list.innerHTML = opts.map((o, i) => `<button type="button" role="option" class="dd-opt ${o.selected ? 'sel' : ''}" data-i="${i}" ${o.disabled ? 'disabled' : ''} data-q="${esc((o.textContent + ' ' + (o.value || '') + ' ' + (o.dataset.sub || '') + ' ' + (o.dataset.cc ? ccName(o.dataset.cc) : '')).toLowerCase())}">${ddLabelHtml(o)}${o.selected ? icon('check', 'dd-ck') : ''}</button>`).join('') || `<div class="dd-empty">—</div>`;
  document.body.appendChild(panel);
  const b = sel._dd; b.classList.add('open');
  const r = b.getBoundingClientRect();
  const w = Math.max(r.width, 240);
  panel.style.width = w + 'px';
  const rtl = document.documentElement.dir === 'rtl';
  let left = rtl ? r.right - w : r.left;
  left = Math.max(8, Math.min(window.innerWidth - w - 8, left));
  panel.style.left = left + 'px';
  const ph = Math.min(360, panel.offsetHeight);
  const below = window.innerHeight - r.bottom - 10;
  if (below < ph && r.top > below) { panel.style.bottom = (window.innerHeight - r.top + 6) + 'px'; panel.style.maxHeight = Math.min(360, r.top - 16) + 'px'; }
  else { panel.style.top = (r.bottom + 6) + 'px'; panel.style.maxHeight = Math.min(360, below) + 'px'; }
  DD_OPEN = { sel, panel };
  let active = Math.max(0, sel.selectedIndex);
  const visible = () => $$('.dd-opt:not([hidden]):not([disabled])', list);
  const mark = () => { $$('.dd-opt', list).forEach((x) => x.classList.toggle('act', +x.dataset.i === active)); const a = list.querySelector(`.dd-opt[data-i="${active}"]`); if (a) a.scrollIntoView({ block: 'nearest' }); };
  const pick = (i) => {
    if (sel.selectedIndex !== i) { sel.selectedIndex = i; sel.dispatchEvent(new Event('change', { bubbles: true })); }
    closeDD(); b.focus();
  };
  list.addEventListener('click', (e) => { const o = e.target.closest('.dd-opt'); if (o && !o.disabled) pick(+o.dataset.i); });
  const inp = panel.querySelector('input');
  const onKey = (e) => {
    const vis = visible(); const idx = vis.findIndex((x) => +x.dataset.i === active);
    if (e.key === 'ArrowDown') { e.preventDefault(); const n = vis[Math.min(vis.length - 1, idx + 1)]; if (n) { active = +n.dataset.i; mark(); } }
    else if (e.key === 'ArrowUp') { e.preventDefault(); const n = vis[Math.max(0, idx - 1)]; if (n) { active = +n.dataset.i; mark(); } }
    else if (e.key === 'Enter') { e.preventDefault(); if (vis.length) pick(idx >= 0 ? active : +vis[0].dataset.i); }
    else if (e.key === 'Tab') closeDD();
  };
  panel.addEventListener('keydown', onKey);
  if (inp) {
    inp.addEventListener('input', () => {
      const q = inp.value.trim().toLowerCase();
      $$('.dd-opt', list).forEach((x) => { x.hidden = !!q && !x.dataset.q.includes(q); });
      const v = visible(); if (v.length) { active = +v[0].dataset.i; mark(); }
    });
    setTimeout(() => inp.focus(), 10);
  } else { panel.tabIndex = -1; setTimeout(() => panel.focus(), 10); }
  mark();
}
document.addEventListener('mousedown', (e) => { if (DD_OPEN && !e.target.closest('.dd-panel') && !e.target.closest('.dd')) closeDD(); });
window.addEventListener('resize', closeDD);
document.addEventListener('scroll', (e) => { if (DD_OPEN && !(e.target.closest && e.target.closest('.dd-panel'))) closeDD(); }, true);

/* ---------------- custom file button ---------------- */
function fileBtn(id, accept, label) {
  return `<label class="filebtn">${icon('upload')}<span class="filebtn-l">${esc(label || t('choose_file'))}</span><span class="filebtn-n" id="${id}Name"></span>
    <input type="file" id="${id}" accept="${accept}"></label>`;
}
document.addEventListener('change', (e) => {
  const f = e.target;
  if (f.matches && f.matches('.filebtn input[type=file]')) {
    const n = document.getElementById(f.id + 'Name');
    if (n) n.textContent = f.files && f.files[0] ? f.files[0].name : '';
  }
});
// password-style secret field with reveal + last-4 hint
function secretField(id, value, placeholder) {
  const v = String(value || '');
  const hint = v && v !== '••••••••' && v !== 'SCRUBBED' && v.length > 4 ? `<span class="secret-hint" dir="ltr">••••${esc(v.slice(-4))}</span>` : '';
  return `<div class="secret"><input id="${id}" type="password" dir="ltr" value="${esc(v)}" autocomplete="off" placeholder="${esc(placeholder || '')}">${hint}
    <button type="button" class="btn btn-ghost btn-icon btn-sm" data-act="reveal" data-target="${id}" title="${esc(t('proxy_show'))}" aria-label="${esc(t('proxy_show'))}">${icon('eye')}</button></div>`;
}
ACT.reveal = (b) => {
  const inp = document.getElementById(b.dataset.target);
  if (!inp) return;
  const show = inp.type === 'password';
  inp.type = show ? 'text' : 'password';
  b.innerHTML = icon(show ? 'eyeoff' : 'eye');
};
// form field wrapper
function field(label, inner, o) {
  o = o || {};
  return `<div class="field ${o.cls || ''}"><label${o.for ? ` for="${o.for}"` : ''}>${esc(label)}</label>${inner}${o.hint ? `<div class="field-hint">${esc(o.hint)}</div>` : ''}</div>`;
}
function toggleRow(id, label, checked, o) {
  o = o || {};
  return `<label class="trow ${o.cls || ''}"><span class="trow-t"><span class="trow-l">${esc(label)}</span>${o.hint ? `<span class="trow-h">${esc(o.hint)}</span>` : ''}</span>
    <span class="switch"><input type="checkbox" id="${id}" ${checked ? 'checked' : ''} ${o.attrs || ''}><i></i></span></label>`;
}
/* =====================================================================
   Shell: theme, density, language, auth, navigation, command palette
   ===================================================================== */
let DENSITY = localStorage.getItem('cp_density') || 'compact';
const VIEWS = [
  { id: 'overview', icon: 'overview', key: 'nav_overview', hot: 'o' },
  { id: 'inbounds', icon: 'inbound', key: 'nav_inbounds', hot: 'i' },
  { id: 'exits', icon: 'exit', key: 'nav_exits', hot: 'e' },
  { id: 'users', icon: 'users', key: 'nav_users', hot: 'u' },
  // v1.0.24: «اشتراک» merged into Users (user drawer → «ساب» tab)
  { id: 'logs', icon: 'logs', key: 'nav_logs', hot: 'l' },
  { id: 'settings', icon: 'settings', key: 'nav_settings', hot: 's' },
];
const RENDER = {};   // view id -> render fn (filled by view modules)
const POLL = {};     // view id -> [fn, ms]
const VIEW_STATE = {}; // per-view scratch, reset on language change

function effectiveTheme() {
  if (THEME === 'dark' || THEME === 'light') return THEME;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
function applyTheme(animate) {
  const root = document.documentElement;
  if (animate) { root.classList.add('theme-anim'); setTimeout(() => root.classList.remove('theme-anim'), 380); }
  root.dataset.theme = effectiveTheme();
  root.dataset.themePref = THEME;
  $$('[data-theme-ic]').forEach((b) => {
    b.innerHTML = icon(THEME === 'dark' ? 'moon' : THEME === 'light' ? 'sun' : 'auto');
    b.title = `${t('theme')}: ${t('theme_' + THEME)}`;
    b.setAttribute('aria-label', b.title);
  });
  const mc = $('meta[name="theme-color"]');
  if (mc) mc.content = effectiveTheme() === 'dark' ? '#0b0d11' : '#f3f1ea';
}
function cycleTheme() {
  THEME = THEME === 'auto' ? 'dark' : THEME === 'dark' ? 'light' : 'auto';
  localStorage.setItem('cp_theme', THEME);
  applyTheme(true);
  toast(`${t('theme')}: ${t('theme_' + THEME)}`);
}
if (window.matchMedia) window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', () => { if (THEME === 'auto') applyTheme(true); });
function applyDensity() {
  document.documentElement.dataset.density = DENSITY;
  $$('[data-density-ic]').forEach((b) => { b.innerHTML = icon(DENSITY === 'compact' ? 'rows' : 'grid'); b.title = `${t('density')}: ${t('density_' + DENSITY)}`; b.setAttribute('aria-label', b.title); });
}
function toggleDensity() {
  DENSITY = DENSITY === 'compact' ? 'comfortable' : 'compact';
  localStorage.setItem('cp_density', DENSITY);
  applyDensity();
  toast(`${t('density')}: ${t('density_' + DENSITY)}`);
}
function applyLang() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'fa' ? 'rtl' : 'ltr';
  $$('[data-lang-lbl]').forEach((el) => { el.textContent = LANG === 'fa' ? 'EN' : 'فا'; });
  $$('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n); });
  $$('[data-i18n-ph]').forEach((el) => { el.placeholder = t(el.dataset.i18nPh); });
  $$('[data-i18n-title]').forEach((el) => { el.title = t(el.dataset.i18nTitle); el.setAttribute('aria-label', el.title); });
  buildNav();
}
function toggleLang() {
  LANG = LANG === 'fa' ? 'en' : 'fa';
  localStorage.setItem('cp_lang', LANG);
  applyLang();
  applyTheme(false); applyDensity();
  renderUpdBanner();
  if (!$('#appView').hidden) {
    // rebuild every view shell in the new language
    ['overview', 'inbounds', 'exits', 'users', 'logs', 'settings'].forEach((v) => {
      const el = document.getElementById('view-' + v); if (el) { el.innerHTML = ''; delete el.dataset.built; }
      VIEW_STATE[v] = {};
    });
    showView(curView, true);
  }
}
function applyFont() {
  document.body.classList.remove('font-vazirmatn', 'font-shabnam', 'font-yekan', 'font-tahoma');
  document.body.classList.add('font-' + ((SETTINGS && SETTINGS.font) || 'vazirmatn'));
}

/* ---------------- navigation ---------------- */
function buildNav() {
  const rail = $('#railNav'), dock = $('#dockNav');
  if (rail) rail.innerHTML = VIEWS.map((v, i) => `<a href="#/${v.id}" class="nav-i" data-nav="${v.id}" style="--i:${i}">
      <span class="nav-ic">${icon(v.icon)}</span><span class="nav-l">${esc(t(v.key))}</span><kbd class="nav-k">G ${v.hot.toUpperCase()}</kbd></a>`).join('');
  if (dock) dock.innerHTML = VIEWS.filter((v) => v.id !== 'logs' || VIEWS.length <= 6).map((v) => `<a href="#/${v.id}" class="dock-i" data-nav="${v.id}">${icon(v.icon)}<span>${esc(t(v.key))}</span></a>`).join('');
  markNav();
}
function markNav() {
  $$('[data-nav]').forEach((a) => {
    const on = a.dataset.nav === curView;
    a.classList.toggle('on', on);
    if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  const v = VIEWS.find((x) => x.id === curView);
  const title = $('#pageTitle');
  if (title && v) title.textContent = t(v.key);
  const sub = $('#pageSub');
  if (sub && v) sub.textContent = t(v.key + '_sub');
}
function parseHash() {
  const h = (location.hash || '').replace(/^#\/?/, '');
  const [path, query] = h.split('?');
  const parts = path.split('/').filter(Boolean);
  const q = {};
  (query || '').split('&').filter(Boolean).forEach((p) => { const [k, v] = p.split('='); q[decodeURIComponent(k)] = decodeURIComponent(v || ''); });
  return { view: parts[0] || 'overview', sub: parts[1] || '', q };
}
let ROUTE = { view: 'overview', sub: '', q: {} };
function go(view, sub, q) {
  let h = '#/' + view + (sub ? '/' + sub : '');
  const qs = Object.entries(q || {}).map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`).join('&');
  if (qs) h += '?' + qs;
  if (location.hash === h) onRoute(); else location.hash = h;
}
async function onRoute() {
  if ($('#appView').hidden) return;
  const r = parseHash();
  // old studio links (#/subs?user=…) open the user's «ساب» tab instead
  if (r.view === 'subs') { go('users', '', Object.assign({}, r.q, { tab: 'sub' })); return; }
  if (!VIEWS.some((v) => v.id === r.view)) { go('overview'); return; }
  if (curView === 'settings' && r.view !== 'settings' && SETTINGS_DIRTY) {
    const ok = await confirmModal({ title: t('unsaved_title'), bodyHtml: `<p class="muted">${esc(t('unsaved_leave'))}</p>`, okText: t('discard'), danger: true });
    if (!ok) { history.replaceState(null, '', '#/settings/' + (ROUTE.sub || '')); return; }
    SETTINGS_DIRTY = false; updateSaveBar();
  }
  ROUTE = r;
  showView(r.view);
}
window.addEventListener('hashchange', onRoute);

function showView(v, force) {
  const changed = curView !== v || force;
  curView = v;
  document.body.dataset.view = v;
  markNav();
  closeMenu(); closeDD();
  $('#app').classList.remove('rail-open');
  VIEWS.forEach((x) => {
    const el = document.getElementById('view-' + x.id);
    if (!el) return;
    const on = x.id === v;
    if (on && el.hidden) { el.hidden = false; el.classList.remove('view-in'); void el.offsetWidth; el.classList.add('view-in'); }
    if (!on) el.hidden = true;
  });
  clearInterval(refreshTimer); refreshTimer = null;
  if (changed) window.scrollTo({ top: 0 });
  const fn = RENDER[v];
  if (fn) Promise.resolve(fn()).catch((e) => toast(e.message || String(e), true));
  const p = POLL[v];
  if (p) refreshTimer = setInterval(p[0], p[1]);
}
function setPoll(v, fn, ms) {
  POLL[v] = [fn, ms];
  if (curView === v) { clearInterval(refreshTimer); refreshTimer = setInterval(fn, ms); }
}
document.addEventListener('visibilitychange', () => {
  if (!document.hidden && POLL[curView]) POLL[curView][0]();
});

/* ---------------- auth ---------------- */
function showLocked() {
  $('#authView').hidden = true;
  $('#appView').hidden = true;
  let ov = document.getElementById('lockOverlay');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'lockOverlay';
    ov.className = 'lock-ov';
    ov.innerHTML = `<div class="lock-box"><span class="lock-ic">${icon('lock')}</span><div class="lock-msg">${esc(t('lic_locked_msg'))}</div></div>`;
    document.body.appendChild(ov);
    ov._poll = setInterval(async () => {
      try {
        const s = await api('GET', 'auth/state');
        if (!s.license_locked) { clearInterval(ov._poll); ov.remove(); initAuth(); }
      } catch (e) {}
    }, 30000);
  }
}
async function initAuth() {
  applyLang(); applyTheme(false); applyDensity();
  const st = await api('GET', 'auth/state');
  if (st.license_locked) { showLocked(); return; }
  $('#setupForm').hidden = true; $('#loginForm').hidden = true;
  if (st.setup_required) { $('#authView').hidden = false; $('#setupForm').hidden = false; setTimeout(() => $('#setupPw').focus(), 50); }
  else if (!st.authed) { $('#authView').hidden = false; $('#loginForm').hidden = false; setTimeout(() => $('#loginPw').focus(), 50); }
  else return enterApp();
}
async function enterApp() {
  $('#authView').hidden = true;
  $('#appView').hidden = false;
  const s = await api('GET', 'settings');
  SETTINGS = s.settings;
  if (!localStorage.getItem('cp_lang') && SETTINGS.lang && SETTINGS.lang !== LANG) { LANG = SETTINGS.lang; applyLang(); }
  applyFont();
  buildNav();
  api('GET', 'status').then((r) => { const v = $('#railVer'); if (v && r.status) v.textContent = 'v' + (r.status.version || '?'); updBannerStart(r.status); }).catch(() => {});
  ROUTE = parseHash();
  if (!location.hash) history.replaceState(null, '', '#/overview');
  onRoute();
}
function bindAuth() {
  $('#setupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const pw = $('#setupPw').value, pw2 = $('#setupPw2').value;
    if (pw !== pw2) return toast(t('pw_mismatch'), true);
    try { await api('POST', 'auth/setup', { password: pw }); enterApp(); }
    catch (err) { toast(err.message, true); }
  });
  $('#loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const b = $('#loginForm button[type=submit]'); b.disabled = true; b.classList.add('loading');
    try { await api('POST', 'auth/login', { password: $('#loginPw').value }); $('#loginPw').value = ''; enterApp(); }
    catch (err) { toast(err.message, true); $('#loginForm').classList.remove('shake'); void $('#loginForm').offsetWidth; $('#loginForm').classList.add('shake'); }
    b.disabled = false; b.classList.remove('loading');
  });
}
ACT.logout = async () => {
  try { await api('POST', 'auth/logout'); } catch (e) {}
  clearInterval(refreshTimer); refreshTimer = null;
  $('#appView').hidden = true;
  initAuth();
};
ACT.theme = () => cycleTheme();
ACT.lang = () => toggleLang();
ACT.density = () => toggleDensity();
ACT.rail = () => {
  const app = $('#app');
  if (window.innerWidth < 900) { app.classList.toggle('rail-open'); return; }
  app.classList.toggle('rail-mini');
  localStorage.setItem('cp_rail', app.classList.contains('rail-mini') ? 'mini' : 'full');
};
ACT.palette = () => openPalette();
ACT.go = (el) => go(el.dataset.view, el.dataset.sub || '', el.dataset.q ? JSON.parse(el.dataset.q) : undefined);

/* ---------------- command palette (Ctrl/Cmd+K) ---------------- */
let PAL_CACHE = { exits: [], users: [], ts: 0 };
async function palData() {
  if (Date.now() - PAL_CACHE.ts < 15000) return PAL_CACHE;
  try {
    const [ex, ur] = await Promise.all([api('GET', 'exits'), api('GET', 'users')]);
    PAL_CACHE = { exits: ex.exits || [], users: ur.users || [], ts: Date.now() };
  } catch (e) {}
  return PAL_CACHE;
}
function palItems(data) {
  const items = [];
  VIEWS.forEach((v) => items.push({ g: t('pal_pages'), ic: v.icon, label: t(v.key), hint: `G ${v.hot.toUpperCase()}`, run: () => go(v.id) }));
  SETTINGS_SECTIONS.forEach((s) => items.push({ g: t('pal_settings'), ic: s.icon, label: `${t('nav_settings')} › ${t(s.key)}`, run: () => go('settings', s.id) }));
  items.push(
    { g: t('pal_actions'), ic: 'plus', label: t('add_user'), run: () => { go('users'); setTimeout(openUserModal, 120); } },
    { g: t('pal_actions'), ic: 'plus', label: t('new_inbound'), run: () => { go('inbounds'); setTimeout(() => openInboundModal(), 120); } },
    { g: t('pal_actions'), ic: 'plus', label: t('custom_create'), run: () => { go('exits'); setTimeout(openCustomModal, 120); } },
    { g: t('pal_actions'), ic: 'hunt', label: t('find_clean') + ' · VPN Gate', run: () => go('exits', '', { src: 'vpngate' }) },
    { g: t('pal_actions'), ic: 'hunt', label: t('moo_find_clean'), run: () => go('exits', '', { src: 'moo' }) },
    { g: t('pal_actions'), ic: 'tg', label: t('proxy_create'), run: () => { go('inbounds'); setTimeout(() => { const d = document.querySelector('#proxyCreate details'); if (d) { d.open = true; d.scrollIntoView({ behavior: 'smooth', block: 'center' }); } }, 400); } },
    { g: t('pal_actions'), ic: THEME === 'dark' ? 'sun' : 'moon', label: t('theme_toggle'), hint: 'T', run: cycleTheme },
    { g: t('pal_actions'), ic: 'rows', label: t('density_toggle'), hint: 'D', run: toggleDensity },
    { g: t('pal_actions'), ic: 'lang', label: LANG === 'fa' ? 'English' : 'فارسی', run: toggleLang },
    { g: t('pal_actions'), ic: 'logout', label: t('logout'), run: () => ACT.logout() },
  );
  (data.exits || []).forEach((e) => items.push({ g: t('nav_exits'), flag: exitFlag(e), label: exitName(e), hint: e.exit_ip || '', q: `${e.country || ''} ${e.exit_ip || ''} ${e.country_name || ''}`, run: () => go('exits', '', { focus: e.id }) }));
  (data.users || []).forEach((u) => items.push({ g: t('nav_users'), ic: 'users', label: u.name, hint: t(u.status), run: () => go('users', '', { focus: u.id }) }));
  return items;
}
async function openPalette() {
  if ($('#palette')) return;
  if ($('#appView').hidden) return;
  const ov = document.createElement('div');
  ov.id = 'palette'; ov.className = 'pal-ov';
  ov.innerHTML = `<div class="pal" role="dialog" aria-modal="true" aria-label="${esc(t('pal_title'))}">
    <div class="pal-in">${icon('search')}<input type="text" placeholder="${esc(t('pal_ph'))}" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>
    <div class="pal-list" role="listbox"></div>
    <div class="pal-foot"><span><kbd>↑</kbd><kbd>↓</kbd> ${esc(t('pal_nav'))}</span><span><kbd>Enter</kbd> ${esc(t('pal_open'))}</span><span><kbd>/</kbd> ${esc(t('pal_search'))}</span></div>
  </div>`;
  document.body.appendChild(ov);
  requestAnimationFrame(() => ov.classList.add('in'));
  const inp = ov.querySelector('input'), list = ov.querySelector('.pal-list');
  let items = palItems(PAL_CACHE), shown = [], active = 0;
  const render = () => {
    const q = inp.value.trim().toLowerCase();
    shown = items.filter((it) => !q || (it.label + ' ' + (it.hint || '') + ' ' + (it.q || '') + ' ' + it.g).toLowerCase().includes(q)).slice(0, 60);
    active = Math.min(active, Math.max(0, shown.length - 1));
    let lastG = null;
    list.innerHTML = shown.map((it, i) => {
      const head = it.g !== lastG ? `<div class="pal-g">${esc(it.g)}</div>` : '';
      lastG = it.g;
      return `${head}<button type="button" class="pal-i ${i === active ? 'act' : ''}" data-i="${i}">${it.flag || icon(it.ic || 'chevside')}<span class="pal-l">${esc(it.label)}</span>${it.hint ? `<span class="pal-h" dir="auto">${esc(it.hint)}</span>` : ''}</button>`;
    }).join('') || `<div class="pal-empty">${esc(t('pal_none'))}</div>`;
    const a = list.querySelector('.pal-i.act'); if (a) a.scrollIntoView({ block: 'nearest' });
  };
  const close = () => { ov.classList.remove('in'); setTimeout(() => ov.remove(), 180); };
  const run = (i) => { const it = shown[i]; close(); if (it) setTimeout(it.run, 30); };
  inp.addEventListener('input', () => { active = 0; render(); });
  inp.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); active = Math.min(shown.length - 1, active + 1); render(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); active = Math.max(0, active - 1); render(); }
    else if (e.key === 'Enter') { e.preventDefault(); run(active); }
    else if (e.key === 'Escape') { e.preventDefault(); close(); }
  });
  list.addEventListener('click', (e) => { const b = e.target.closest('.pal-i'); if (b) run(+b.dataset.i); });
  ov.addEventListener('mousedown', (e) => { if (e.target === ov) close(); });
  render(); inp.focus();
  const d = await palData();
  if (ov.isConnected) { items = palItems(d); render(); }
}

/* ---------------- keyboard shortcuts ---------------- */
let gPending = 0;
document.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) { e.preventDefault(); openPalette(); return; }
  if ($('#appView').hidden || MODAL_STACK.length || $('#palette')) return;
  const tag = (e.target.tagName || '');
  if (/INPUT|TEXTAREA|SELECT/.test(tag) || e.target.isContentEditable || e.ctrlKey || e.metaKey || e.altKey) return;
  const k = e.key.toLowerCase();
  if (k === '/') { const s = $('#view-' + curView + ' [data-search]'); if (s) { e.preventDefault(); s.focus(); } else { e.preventDefault(); openPalette(); } return; }
  if (gPending && Date.now() - gPending < 1200) {
    gPending = 0;
    const v = VIEWS.find((x) => x.hot === k);
    if (v) { e.preventDefault(); go(v.id); }
    return;
  }
  if (k === 'g') { gPending = Date.now(); return; }
  if (k === 't') cycleTheme();
  else if (k === 'd') toggleDensity();
  else if (k === '?') showShortcuts();
});
function showShortcuts() {
  const rows = [['Ctrl/⌘ K', t('pal_title')], ['/', t('pal_search')], ['T', t('theme_toggle')], ['D', t('density_toggle')], ['?', t('shortcuts')]]
    .concat(VIEWS.map((v) => [`G ${v.hot.toUpperCase()}`, t(v.key)]));
  openModal({ title: t('shortcuts'), icon: 'code', size: 'sm', body: `<div class="kbd-list">${rows.map(([k, l]) => `<div class="kbd-row"><span>${esc(l)}</span><kbd dir="ltr">${esc(k)}</kbd></div>`).join('')}</div>` });
}
ACT.shortcuts = () => showShortcuts();
/* =====================================================================
   v1.0.28 — update banner at the top of every page.
   Uses the existing update check (GET update/check, the github_owner /
   github_repo source from Settings) and the existing apply flow
   (same confirm modal, POST update/apply, waitForServerThenReload).
   - checked on app entry and every 6 h; the result is cached in
     localStorage for 6 h per running version (failures too, so an
     unreachable repo is not re-asked on every page load)
   - a failed check shows NOTHING here (Settings keeps its own status)
   - × hides it until a newer version than the dismissed one appears
   - states: available · updating · restarting · restart-needed
   ===================================================================== */
const UPDB_TTL = 6 * 3600 * 1000;
const UPDB_CACHE_K = 'cp_upd_cache';
const UPDB_DISMISS_K = 'cp_upd_dismissed';
const UPDB = { cur: '', info: null, state: '', timer: null, lastUpdate: null };

function updVerCmp(a, b) {
  // '1.0.28' vs '1.0.27' (same rules as panel.py _ver_tuple)
  const tup = (v) => String(v || '').replace(/^v/, '').split('.').map((p) => { const m = /^\d+/.exec(p); return m ? +m[0] : 0; });
  const x = tup(a), y = tup(b);
  for (let i = 0; i < Math.max(x.length, y.length); i++) { const d = (x[i] || 0) - (y[i] || 0); if (d) return d > 0 ? 1 : -1; }
  return 0;
}
function updbEl() {
  let el = document.getElementById('updBanner');
  if (!el) {
    const views = document.querySelector('#appView .views');
    if (!views) return null;
    el = document.createElement('div');
    el.id = 'updBanner'; el.className = 'upd-banner'; el.hidden = true;
    el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite');
    views.parentNode.insertBefore(el, views);
  }
  return el;
}
function updbCacheGet() {
  try {
    const c = JSON.parse(localStorage.getItem(UPDB_CACHE_K) || 'null');
    if (c && c.cur === UPDB.cur && Date.now() - (c.ts || 0) < UPDB_TTL) return c;
  } catch (e) {}
  return null;
}
function updbCacheSet(c) { try { localStorage.setItem(UPDB_CACHE_K, JSON.stringify(Object.assign({ ts: Date.now(), cur: UPDB.cur }, c))); } catch (e) {} }
function updbDismissed() { try { return localStorage.getItem(UPDB_DISMISS_K) || ''; } catch (e) { return ''; } }
function updbFmt(key, v) { return t(key).replace('{v}', v || ''); }

function renderUpdBanner() {
  const el = updbEl(); if (!el) return;
  const i = UPDB.info, st = UPDB.state;
  let html = '', kind = '';
  if (st === 'updating' || st === 'restarting') {
    kind = 'busy';
    html = `<span class="spin"></span><span class="updb-t">${esc(st === 'updating' ? updbFmt('updb_running', (i && i.latest) || '') : t('updb_restarting'))}</span>`;
  } else if (st === 'restart_needed' && UPDB.lastUpdate) {
    kind = 'warn';
    html = `${icon('alert')}<span class="updb-t">${esc(updbFmt('updb_restart_needed', UPDB.lastUpdate.to))}</span>
      <span class="updb-a"><button type="button" class="btn btn-sm" data-updb="reload">${icon('refresh')}<span class="btn-l">${esc(t('updb_reload'))}</span></button></span>`;
  } else if (i && i.ok && i.update_available && i.latest && updVerCmp(i.latest, UPDB.cur) > 0 && updbDismissed() !== i.latest) {
    kind = 'avail';
    html = `${icon('sparkle')}<span class="updb-t">${esc(t('updb_avail')).replace('{v}', `<b dir="ltr">v${esc(i.latest)}</b>`)}</span>
      <span class="updb-a"><button type="button" class="btn btn-pri btn-sm" data-updb="apply">${icon('download')}<span class="btn-l">${esc(t('updb_btn'))}</span></button>
      <a href="#/settings/update" class="updb-link" data-updb="details">${esc(t('updb_details'))}</a></span>
      <button type="button" class="btn btn-ghost btn-icon btn-sm updb-x" data-updb="dismiss" title="${esc(t('updb_dismiss'))}" aria-label="${esc(t('updb_dismiss'))}">${icon('x')}</button>`;
  }
  el.hidden = !html;
  el.dataset.kind = kind;
  el.innerHTML = html;
  document.body.classList.toggle('has-updb', !!html);
}

async function updbCheck(force) {
  if (!force) { const c = updbCacheGet(); if (c) { UPDB.info = c; renderUpdBanner(); return; } }
  try {
    const u = (await api('GET', 'update/check')).update || {};
    UPDB.info = { ok: true, latest: u.latest || null, update_available: !!u.update_available };
  } catch (e) {
    UPDB.info = { ok: false };   // silent: no banner, no toast
  }
  updbCacheSet(UPDB.info);
  if (!UPDB.state || UPDB.state === 'restart_needed') renderUpdBanner();
}

function updBannerStart(status) {
  status = status || {};
  UPDB.cur = String(status.version || '');
  if (!UPDB.cur) return;
  const lu = status.last_update;
  // the existing flow records last_update {to,…}; when it names a newer
  // version than the one running, the restart did not happen yet.
  UPDB.lastUpdate = lu && lu.ok && lu.to && updVerCmp(lu.to, UPDB.cur) > 0 ? lu : null;
  if (UPDB.lastUpdate && !UPDB.state) UPDB.state = 'restart_needed';
  renderUpdBanner();
  updbCheck(false);
  clearInterval(UPDB.timer);
  UPDB.timer = setInterval(() => updbCheck(true), UPDB_TTL);
}

// The existing update flow (Settings «آپدیت کن»), shared by the banner.
async function doPanelUpdate() {
  if (!(await confirmModal({ title: t('upd_now'), bodyHtml: `<p class="muted">${esc(t('upd_confirm'))}</p><div class="warnbox">${icon('alert')}<span>${esc(t('upd_ui_warn'))}</span></div>`, okText: t('upd_now'), danger: true }))) return false;
  const prev = UPDB.state;
  UPDB.state = 'updating'; renderUpdBanner();
  try {
    await api('POST', 'update/apply');
    UPDB.state = 'restarting'; renderUpdBanner();
    try { localStorage.removeItem(UPDB_CACHE_K); } catch (e) {}
    toast(t('upd_restarting')); waitForServerThenReload();
    return true;
  } catch (err) {
    UPDB.state = prev === 'restart_needed' ? prev : ''; renderUpdBanner();
    toast(err.message, true);
    return false;
  }
}

document.addEventListener('click', (ev) => {
  const b = ev.target.closest && ev.target.closest('[data-updb]');
  if (!b) return;
  const a = b.dataset.updb;
  if (a === 'apply') { ev.preventDefault(); doPanelUpdate(); }
  else if (a === 'dismiss') {
    ev.preventDefault();
    if (UPDB.info && UPDB.info.latest) { try { localStorage.setItem(UPDB_DISMISS_K, UPDB.info.latest); } catch (e) {} }
    renderUpdBanner();
  } else if (a === 'reload') { ev.preventDefault(); window.location.reload(); }
  else if (a === 'details') {
    ev.preventDefault();
    go('settings', 'update');
    // open the Settings update section and run its check there
    let n = 0;
    const tick = () => { const c = document.getElementById('uCheck'); const sec = document.querySelector('#view-settings section[data-sec="update"], #view-settings [data-sec="update"]:not(.snav-i)'); if (c && sec && !sec.hidden) c.click(); else if (n++ < 40) setTimeout(tick, 100); };
    setTimeout(tick, 50);
  }
});
/* =====================================================================
   Overview — stats only (no inbound management here)
   ===================================================================== */
// Collapsible panel component; open/closed state persists per id.
function panel({ id, title, ic, actions, body, cls, collapsible, sub, count }) {
  const closed = collapsible && localStorage.getItem('cp_pnl_' + id) === '0';
  return `<section class="pnl ${cls || ''} ${closed ? 'closed' : ''}" ${id ? `id="pnl-${id}" data-pnl="${id}"` : ''}>
    <header class="pnl-h">
      ${collapsible ? `<button type="button" class="pnl-tg" data-act="pnl" aria-expanded="${closed ? 'false' : 'true'}">${icon('chev', 'pnl-chev')}</button>` : ''}
      ${ic ? `<span class="pnl-ic">${icon(ic)}</span>` : ''}
      <h2 class="pnl-t">${esc(title)}${count !== undefined ? `<span class="pnl-n" dir="ltr">${esc(count)}</span>` : ''}</h2>
      ${sub ? `<span class="pnl-sub">${sub}</span>` : ''}
      <span class="pnl-sp"></span>
      ${actions ? `<div class="pnl-a">${actions}</div>` : ''}
    </header>
    <div class="pnl-b">${body || ''}</div>
  </section>`;
}
ACT.pnl = (b) => {
  const p = b.closest('.pnl');
  const closed = !p.classList.contains('closed');
  p.classList.toggle('closed', closed);
  b.setAttribute('aria-expanded', closed ? 'false' : 'true');
  if (p.dataset.pnl) localStorage.setItem('cp_pnl_' + p.dataset.pnl, closed ? '0' : '1');
};

/* ---- segmented tick meter (replaces the planet gauges) ---- */
const METER_N = 32;
function meterHtml(id, label, ic) {
  const ticks = [];
  for (let i = 0; i < METER_N; i++) {
    const a = (-125 + (250 * i) / (METER_N - 1)) * Math.PI / 180;
    const x1 = 60 + Math.sin(a) * 40, y1 = 58 - Math.cos(a) * 40;
    const x2 = 60 + Math.sin(a) * 50, y2 = 58 - Math.cos(a) * 50;
    ticks.push(`<line x1="${x1.toFixed(2)}" y1="${y1.toFixed(2)}" x2="${x2.toFixed(2)}" y2="${y2.toFixed(2)}" style="--d:${i * 12}ms"/>`);
  }
  return `<div class="meter" id="m-${id}" data-level="ok">
    <div class="meter-dial">
      <svg viewBox="0 0 120 104" class="meter-svg" aria-hidden="true"><g class="meter-ticks">${ticks.join('')}</g></svg>
      <div class="meter-c"><b class="meter-v" id="mv-${id}" dir="ltr">–</b><span class="meter-u">%</span></div>
    </div>
    <div class="meter-meta"><span class="meter-l">${icon(ic)}${esc(label)}</span><span class="meter-d" id="md-${id}" dir="ltr">—</span></div>
  </div>`;
}
function setMeter(id, pct, detail) {
  const p = Math.max(0, Math.min(100, pct || 0));
  const m = document.getElementById('m-' + id);
  if (!m) return;
  const lit = Math.round((p / 100) * METER_N);
  m.querySelectorAll('.meter-ticks line').forEach((l, i) => l.classList.toggle('on', i < lit));
  m.dataset.level = p >= 85 ? 'bad' : p >= 65 ? 'warn' : 'ok';
  animateNum(document.getElementById('mv-' + id), p, (v) => String(Math.round(v)));
  if (detail !== undefined) { const d = document.getElementById('md-' + id); if (d) d.textContent = detail; }
}
// legacy names kept for API compatibility with older hooks
const setGauge = setMeter;
function sysPcts(d) {
  return {
    cpu: Math.min(100, (d.load1 / Math.max(1, d.cpu_count || 1)) * 100),
    ram: d.mem_total ? (1 - d.mem_avail / d.mem_total) * 100 : 0,
    disk: d.disk_total ? (1 - d.disk_free / d.disk_total) * 100 : 0,
  };
}
function applySysGauges(d) {
  const p = sysPcts(d);
  setMeter('cpu', p.cpu, `${t('cpu_load')} ${d.load1} / ${d.cpu_count || 1}`);
  setMeter('ram', p.ram, `${gb(d.mem_total - d.mem_avail)} / ${gb(d.mem_total)}`);
  setMeter('disk', p.disk, `${gb(d.disk_total - d.disk_free)} / ${gb(d.disk_total)}`);
}
function animateNum(el, to, fmt) {
  if (!el) return;
  const from = el._num ?? (REDUCED_MOTION ? to : 0);
  el._num = to;
  if (from === to || REDUCED_MOTION) { el.textContent = fmt(to); return; }
  const t0 = performance.now(), dur = 520;
  cancelAnimationFrame(el._raf);
  (function step(now) {
    const k = Math.min(1, (now - t0) / dur);
    const e = 1 - Math.pow(1 - k, 3);
    el.textContent = fmt(from + (to - from) * e);
    if (k < 1) el._raf = requestAnimationFrame(step);
  })(t0);
}
const REDUCED_MOTION = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

/* ---- per-core heat strip ---- */
let LAST_CORES = [];
function setCores(cores) {
  const box = document.getElementById('coreStrip');
  if (!box) return;
  LAST_CORES = (cores || []).map((c) => Math.max(0, Math.min(100, c)));
  if (box.children.length !== LAST_CORES.length) {
    box.innerHTML = LAST_CORES.map((p, i) => `<div class="core" title="CPU${i}"><span class="core-f"></span><span class="core-n" dir="ltr">C${i}</span><b class="core-p" dir="ltr">—</b></div>`).join('');
  }
  [...box.children].forEach((c, i) => {
    const p = LAST_CORES[i];
    c.style.setProperty('--p', (p / 100).toFixed(3));
    c.dataset.level = p >= 85 ? 'bad' : p >= 60 ? 'warn' : 'ok';
    c.querySelector('.core-p').textContent = Math.round(p) + '%';
  });
}

/* ---- live traffic: pulse timeline (bars with axes) ---- */
const RATES = [];
const RATE_SLOTS = 40, TICK_S = 5;
let LAST_USED = null, LAST_TS = 0;
const USER_RATES = new Map();
function noteUserTraffic(uid, usedBytes) {
  const now = Date.now();
  const prev = USER_RATES.get(uid);
  if (prev && now > prev.ts && usedBytes >= prev.bytes) {
    USER_RATES.set(uid, { bytes: usedBytes, ts: now, rate: (usedBytes - prev.bytes) / ((now - prev.ts) / 1000) });
  } else if (!prev) USER_RATES.set(uid, { bytes: usedBytes, ts: now, rate: 0 });
  else { prev.bytes = usedBytes; prev.ts = now; }
}
function pushTraffic(used) {
  const now = Date.now();
  if (LAST_USED !== null && now > LAST_TS) {
    RATES.push(Math.max(0, (used - LAST_USED) / ((now - LAST_TS) / 1000)));
    if (RATES.length > RATE_SLOTS) RATES.shift();
  }
  LAST_USED = used; LAST_TS = now;
  drawPulse();
}
function niceMax(v) {
  if (v <= 0) return 1024;
  const p = Math.pow(1024, Math.floor(Math.log(v) / Math.log(1024)));
  const n = v / p;
  const step = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : n <= 10 ? 10 : n <= 20 ? 20 : n <= 50 ? 50 : n <= 100 ? 100 : n <= 200 ? 200 : n <= 500 ? 500 : 1000;
  return step * p;
}
function pulseHtml() {
  return `<div class="pulse">
    <div class="pulse-y"><span id="pyMax" dir="ltr">—</span><span id="pyMid" dir="ltr"></span><span dir="ltr">0</span></div>
    <div class="pulse-plot">
      <div class="pulse-grid"><i></i><i></i><i></i></div>
      <div class="pulse-bars" id="pulseBars">${Array.from({ length: RATE_SLOTS }, () => '<i class="pb"></i>').join('')}</div>
      <div class="pulse-wait" id="pulseWait">${icon('signal')}<span>${esc(t('collecting'))}</span></div>
    </div>
    <div class="pulse-x" dir="ltr"><span>−${Math.round((RATE_SLOTS * TICK_S) / 60)}m</span><span>−${Math.round((RATE_SLOTS * TICK_S) / 120)}m</span><span>${esc(t('now'))}</span></div>
  </div>`;
}
function drawPulse() {
  const bars = document.getElementById('pulseBars');
  const cur = document.getElementById('sparkRate');
  if (cur) cur.textContent = RATES.length ? fmtRate(RATES[RATES.length - 1]) : '—';
  if (!bars) return;
  const w = document.getElementById('pulseWait');
  if (w) w.hidden = RATES.length > 0;
  const mx = niceMax(Math.max(...RATES, 0));
  const yM = document.getElementById('pyMax'), yH = document.getElementById('pyMid');
  if (yM) yM.textContent = fmtRate(mx);
  if (yH) yH.textContent = fmtRate(mx / 2);
  const kids = bars.children;
  const off = RATE_SLOTS - RATES.length;
  for (let i = 0; i < RATE_SLOTS; i++) {
    const v = i >= off ? RATES[i - off] : 0;
    const k = kids[i];
    k.style.transform = `scaleY(${Math.max(i >= off ? 0.015 : 0, v / mx).toFixed(4)})`;
    k.classList.toggle('last', i === RATE_SLOTS - 1 && RATES.length > 0);
    k.title = i >= off ? fmtRate(v) : '';
  }
  const pk = document.getElementById('ratePeak'); if (pk) pk.textContent = RATES.length ? fmtRate(Math.max(...RATES)) : '—';
  const av = document.getElementById('rateAvg'); if (av) av.textContent = RATES.length ? fmtRate(RATES.reduce((a, b) => a + b, 0) / RATES.length) : '—';
}

/* ---- exit constellation ---- */
function constellationHtml(exits) {
  if (!exits || !exits.length) return emptyState(t('no_exits'), 'exit');
  const sorted = dashSortedExits(exits);
  return `<div class="const">${sorted.map((e, i) => {
    const tone = e.status === 'up' ? (e.score !== null && e.score !== undefined && SETTINGS && e.score > SETTINGS.target_score ? 'warn' : 'ok') : (e.status === 'searching' || e.status === 'connecting') ? 'warn' : 'bad';
    return `<button type="button" class="star star-${tone}" style="--i:${i}" data-act="go" data-view="exits" data-q='${esc(JSON.stringify({ focus: e.id }))}' title="${esc(exitName(e))} · ${esc(e.exit_ip || '')}">
      <span class="star-o">${exitFlag(e, 'flag-lg')}</span>
      <span class="star-n">${esc(exitName(e))}</span>
      <span class="star-s" dir="ltr">${e.status === 'searching' ? '…' : (e.score ?? '?')}</span>
    </button>`;
  }).join('')}</div>`;
}
function dashSortedExits(exits) {
  const rank = (e) => (e.status === 'up' ? 0 : 1);
  const name = (e) => (e.label || e.country_name || e.country || '');
  return [...(exits || [])].sort((a, b) => (rank(a) - rank(b)) || name(a).localeCompare(name(b)) || ((a.inbound_port || 0) - (b.inbound_port || 0)));
}

/* ---- users: online + traffic ---- */
function initials(n) { const s = String(n || '?').trim(); return esc(s.slice(0, 1).toUpperCase()); }
function onlineCardHtml(d) {
  const list = d.online_users || [];
  if (!list.length) return emptyState(t('no_online'), 'users');
  return `<ul class="olist">${list.map((o, i) => `<li style="--i:${i}">
      <span class="ava ava-on">${initials(o.name)}</span>
      <span class="olist-n">${esc(o.name)}</span>
      ${kv(t('active_ips'), `${o.active_ips}/${o.limit_ip > 0 ? o.limit_ip : '∞'}`, { ltr: true })}
      <span class="olist-t">${icon('clock')}${esc(relTime(o.last_seen))}</span>
    </li>`).join('')}</ul>`;
}
function trafficRowHtml(u, maxUsed) {
  const quota = u.total_gb > 0;
  const pct = quota ? Math.min(100, (u.used_bytes / (u.total_gb * 1073741824)) * 100) : (maxUsed ? (u.used_bytes / maxUsed) * 100 : 0);
  const tone = quota ? (pct >= 100 ? 'bad' : pct >= 80 ? 'warn' : 'ok') : 'vio';
  noteUserTraffic(u.id, u.used_bytes || 0);
  const r = USER_RATES.get(u.id);
  return `<div class="trow2" data-uid="${esc(u.id)}">
    <span class="trow2-n">${u.online ? '<i class="live"></i>' : '<i class="live off"></i>'}${esc(u.name)}</span>
    ${meterBar(pct, tone)}
    <span class="trow2-v" dir="ltr"><b class="u-used">${gb(u.used_bytes)}</b> / ${quota ? u.total_gb.toFixed(2) + ' GB' : '∞'}</span>
    <span class="trow2-r" dir="ltr">${r && r.rate > 0 ? fmtRate(r.rate) : ''}</span>
  </div>`;
}
function trafficCardHtml(d) {
  const list = d.users_traffic || [];
  if (!list.length) return emptyState(t('no_users'), 'users');
  const maxUsed = Math.max(1, ...list.map((u) => u.used_bytes || 0));
  return `<div class="tlist">${[...list].sort((a, b) => (b.used_bytes || 0) - (a.used_bytes || 0)).map((u) => trafficRowHtml(u, maxUsed)).join('')}</div>`;
}
function exitCountsHtml(by) {
  const keys = Object.keys(by || {});
  if (!keys.length) return '<span class="muted">—</span>';
  return keys.map((k) => `<span class="cnt cnt-${(STATUS_TONE[k] || ['mute'])[0]}"><i></i>${esc(STATUS_TONE[k] ? t(STATUS_TONE[k][1]) : k)}<b dir="ltr">${by[k]}</b></span>`).join('');
}

let dashPolling = false;
let OV_SNAP = {};
async function refreshDashStats() {
  if (curView !== 'overview' || document.hidden || dashPolling) return;
  dashPolling = true;
  try {
    const [s, ex] = await Promise.all([api('GET', 'status'), api('GET', 'exits')]);
    paintOverview(s.status, ex.exits || [], false);
  } catch (e) { /* keep last shown values */ }
  finally { dashPolling = false; }
}
function paintOverview(d, exits, first) {
  applySysGauges(d);
  setCores(d.cpu_cores);
  pushTraffic(d.users_used_bytes || 0);
  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };
  const svc = (on) => pill(on ? t('running') : t('stopped'), on ? 'ok' : 'bad', { dot: true });
  set('ovXray', svc(d.xray_active));
  set('ovSocks', svc(d.socks_active));
  const up = document.getElementById('dashUptime'); if (up) up.textContent = fmtDur(d.uptime_s);
  animateNum(document.getElementById('dashTotalUsed'), d.users_used_bytes || 0, (v) => gb(v));
  animateNum(document.getElementById('kUsers'), d.users_total || 0, (v) => String(Math.round(v)));
  animateNum(document.getElementById('kOnline'), d.users_online || 0, (v) => String(Math.round(v)));
  animateNum(document.getElementById('kNodes'), d.csv_nodes || 0, (v) => String(Math.round(v)));
  animateNum(document.getElementById('kExits'), d.exits_total ?? exits.length, (v) => String(Math.round(v)));
  const snapBy = JSON.stringify(d.exits_by_status || {});
  if (first || snapBy !== OV_SNAP.by) { OV_SNAP.by = snapBy; set('dashExitChips', exitCountsHtml(d.exits_by_status)); }
  // v1.0.26: include the rendered relTime so «x min ago» text refreshes every poll
  const onSnap = JSON.stringify((d.online_users || []).map((o) => [o, relTime(o.last_seen)]));
  if (first || onSnap !== OV_SNAP.on) { OV_SNAP.on = onSnap; set('onlineCard', onlineCardHtml(d)); const n = document.getElementById('onlineN'); if (n) n.textContent = d.users_online || 0; }
  const trSnap = JSON.stringify((d.users_traffic || []).map((u) => [u.id, u.used_bytes, u.online, u.total_gb]));
  if (first || trSnap !== OV_SNAP.tr) { OV_SNAP.tr = trSnap; set('trafficCard', trafficCardHtml(d)); }
  const exSnap = JSON.stringify(exits.map((e) => [e.id, e.status, e.exit_ip, e.score]));
  if (first || exSnap !== OV_SNAP.ex) { OV_SNAP.ex = exSnap; set('constBox', constellationHtml(exits)); const n = document.getElementById('constN'); if (n) n.textContent = exits.length; }
  const v = $('#railVer'); if (v && d.version) v.textContent = 'v' + d.version;
}
RENDER.overview = async function renderDashboard() {
  const el = $('#view-overview');
  if (!el.dataset.built) {
    el.dataset.built = '1';
    el.innerHTML = `
    <div class="ov-ribbon stagger">
      <div class="kpi" style="--i:0"><span class="kpi-ic">${icon('users')}</span><div><span class="kpi-l">${esc(t('users'))}</span><b class="kpi-v" id="kUsers" dir="ltr">–</b></div><span class="kpi-x"><i class="live"></i><b id="kOnline" dir="ltr">0</b> ${esc(t('online'))}</span></div>
      <div class="kpi" style="--i:1"><span class="kpi-ic">${icon('download')}</span><div><span class="kpi-l">${esc(t('total_used'))}</span><b class="kpi-v" id="dashTotalUsed" dir="ltr">–</b></div></div>
      <div class="kpi" style="--i:2"><span class="kpi-ic">${icon('exit')}</span><div><span class="kpi-l">${esc(t('exits'))}</span><b class="kpi-v" id="kExits" dir="ltr">–</b></div><span class="kpi-x kpi-cnts" id="dashExitChips"></span></div>
      <div class="kpi" style="--i:3"><span class="kpi-ic">${icon('database')}</span><div><span class="kpi-l">${esc(t('csv_nodes'))}</span><b class="kpi-v" id="kNodes" dir="ltr">–</b></div></div>
      <div class="kpi" style="--i:4"><span class="kpi-ic">${icon('clock')}</span><div><span class="kpi-l">${esc(t('uptime'))}</span><b class="kpi-v" id="dashUptime" dir="ltr">–</b></div>
        <span class="kpi-x kpi-svc">${kv(t('xray'), '<span id="ovXray"></span>', { raw: true })}${kv(t('socks'), '<span id="ovSocks"></span>', { raw: true })}</span></div>
    </div>
    <div class="ov-grid">
      ${panel({ id: 'sys', title: t('sys_status'), ic: 'cpu', collapsible: true, cls: 'ov-sys', body: `
        <div class="meters">${meterHtml('cpu', t('g_cpu'), 'cpu')}${meterHtml('ram', t('g_ram'), 'database')}${meterHtml('disk', t('g_disk'), 'server')}</div>
        <div class="cores-h">${esc(t('cores_lbl'))}</div><div class="cores" id="coreStrip"></div>` })}
      ${panel({ id: 'pulse', title: t('traffic_live'), ic: 'signal', collapsible: true, cls: 'ov-pulse',
        actions: `<span class="rate-now"><i class="live"></i><b id="sparkRate" dir="ltr">—</b></span>`,
        body: `${pulseHtml()}<div class="pulse-stats">${kv(t('peak'), '<span id="ratePeak" dir="ltr">—</span>', { raw: true })}${kv(t('average'), '<span id="rateAvg" dir="ltr">—</span>', { raw: true })}${kv(t('sample_every'), `${TICK_S}s`, { ltr: true })}</div>` })}
      ${panel({ id: 'const', title: t('constellation'), ic: 'radar', collapsible: true, cls: 'ov-const', count: '', sub: `<span class="muted">${esc(t('constellation_sub'))}</span>`,
        actions: btn(t('nav_exits'), { kind: 'ghost', sm: true, icon: 'chevside', act: 'go', attrs: 'data-view="exits"' }),
        body: `<div id="constBox">${skeleton(1, 92)}</div>` })}
      ${panel({ id: 'online', title: t('online_users'), ic: 'users', collapsible: true, cls: 'ov-online', actions: `<span class="pill pill-ok"><i class="pill-dot"></i><b id="onlineN" dir="ltr">0</b></span>`, body: `<div id="onlineCard">${skeleton(2, 34)}</div>` })}
      ${panel({ id: 'traffic', title: t('traffic_per_user'), ic: 'download', collapsible: true, cls: 'ov-traffic', body: `<div id="trafficCard">${skeleton(3, 30)}</div>` })}
      ${panel({ id: 'installs', title: '📈 ' + t('inst_title'), collapsible: true, cls: 'ov-inst', sub: `<span class="muted">${esc(t('inst_sub'))}</span>`, body: '<div id="instBox"></div>' })}
    </div>`;
    const ip = el.querySelector('#pnl-installs'); if (ip) ip.hidden = true;
    $$('.pulse-x span', el);
  }
  try {
    const [s, ex] = await Promise.all([api('GET', 'status'), api('GET', 'exits')]);
    PROTOCOLS = ex.protocols || [];
    paintOverview(s.status, ex.exits || [], true);
  } catch (err) { toast(err.message, true); }
  refreshInstalls(true);
};
/* ---- anonymous install counter (v1.0.24) — shown only when this panel
   has received pings (installs.json has entries) ---- */
let INST_TS = 0;
function installsHtml(d) {
  const k = (v, l) => `<div class="inst-k"><b dir="ltr">${esc(String(v))}</b><span>${esc(l)}</span></div>`;
  return `<div class="inst-kpis">${k(d.active_24h, t('inst_24h'))}${k(d.active_7d, t('inst_7d'))}${k(d.active_30d, t('inst_30d'))}${k(d.total, t('inst_total'))}</div>
    ${(d.by_version || []).length ? `<div class="inst-v"><span class="muted">${esc(t('inst_by_ver'))}</span>${d.by_version.map((x) => `<span class="cnt cnt-mute"><i></i><bdi dir="ltr">v${esc(x.v)}</bdi><b dir="ltr">${esc(String(x.n))}</b></span>`).join('')}</div>` : ''}`;
}
async function refreshInstalls(force) {
  if (!force && Date.now() - INST_TS < 600000 && INST_TS) return;
  INST_TS = Date.now();
  const p = document.getElementById('pnl-installs');
  if (!p) return;
  try {
    const d = (await api('GET', 'telemetry/installs')).installs || {};
    p.hidden = !d.has_data;
    if (d.has_data) { const b = document.getElementById('instBox'); if (b) b.innerHTML = installsHtml(d); }
  } catch (e) { p.hidden = true; }
}
POLL.overview = [refreshDashStats, 5000];
/* =====================================================================
   Inbounds — every listener in one place:
   Xray inbounds per exit (auto default + manual), WireGuard, OpenVPN.
   Endpoints: GET exits, POST exits/<id>/inbounds
   {protocol, port?}, DELETE inbounds/<id>, wg/*, ovpn/*, protocols/egress,
   v1.0.29: PUT|DELETE exits/<id>/inbounds/<ib>/cdn (42-ibcdn.js).
   ===================================================================== */
const IB = { exits: [], wg: null, wgErr: null, ov: null, ovErr: null, eg: null, egErr: null, users: [], usersErr: null, filter: { q: '', proto: 'all', exit: 'all' }, snap: null };
let LAST_WG = null, LAST_OVPN = null, PROTO_EGRESS = null;
const PROTO_EXIT_BY_KEY = new Map();

function protoIcon(id) {
  if (id === 'wireguard') return 'wg';
  if (id === 'openvpn') return 'ovpn';
  if (/hysteria/.test(id)) return 'bolt';
  if (/trojan/.test(id)) return 'shield';
  if (/ss/.test(id)) return 'lock';
  return 'inbound';
}
function protoLabel(id) {
  if (id === 'wireguard') return t('proto_wg');
  if (id === 'openvpn') return t('proto_ovpn');
  const p = PROTOCOLS.find((x) => x.id === id);
  return p ? p.label : id;
}
// Flatten exits -> inbound rows
function ibRows() {
  const rows = [];
  IB.exits.forEach((e) => (e.inbounds || []).forEach((ib) => rows.push({ kind: 'xray', ib, e, proto: ib.protocol, port: ib.port })));
  if (IB.wg) rows.push({ kind: 'wg', proto: 'wireguard', port: IB.wg.listen_port, st: IB.wg });
  else if (IB.wgErr) rows.push({ kind: 'wg', proto: 'wireguard', port: null, st: null });
  if (IB.ov) rows.push({ kind: 'ovpn', proto: 'openvpn', port: IB.ov.port, st: IB.ov });
  else if (IB.ovErr) rows.push({ kind: 'ovpn', proto: 'openvpn', port: null, st: null });
  return rows;
}
function egressBinding(eg) {
  if (!eg || eg.type === 'direct') {
    const d = (PROTO_EGRESS && PROTO_EGRESS.direct) || {};
    return `<span class="xl"><span class="flag flag-none">${icon('server')}</span><span class="xl-n">${esc(t('proto_direct'))}</span></span>${d.ip ? `<span class="sub-ip">${ltr(d.ip)}</span>` : ''}`;
  }
  return `<span class="xl">${flagImg(eg.country)}<span class="xl-n">${esc(ccName(eg.country, eg.country))}</span></span>${eg.ip ? `<span class="sub-ip">${ltr(eg.ip)}</span>` : ''}`;
}
function srvStatus(st) {
  if (!st) return pill(t('proto_unavailable'), 'bad', { dot: true });
  if (!st.available) return pill(t('proto_unavailable'), 'bad', { dot: true });
  return st.enabled ? pill(t('running'), 'ok', { dot: true }) : pill(t('stopped'), 'mute', { dot: true });
}
function ibRowHtml(r, i) {
  if (r.kind === 'xray') {
    const { ib, e } = r;
    const items = [
      { icon: 'copy', label: `${t('copy')} · ${t('proxy_port')}`, run: () => copyText(String(ib.port)) },
      { icon: 'exit', label: t('open_exit'), run: () => go('exits', '', { focus: e.id }) },
    ];
    if (cdnCapable(ib)) items.push({ icon: 'cloud', label: t('cdn_menu'), run: () => openCdnModal(ib, e) });
    if (!ib.default) items.push('-', { icon: 'trash', label: t('del'), danger: true, run: () => deleteInbound(ib, e) });
    return `<tr style="--i:${i}" data-ibrow>
      <td data-ib="${esc(ib.id)}"><span class="proto">${icon(protoIcon(ib.protocol))}<span>${esc(ib.label || protoLabel(ib.protocol))}</span>${cdnBadge(ib)}</span></td>
      <td class="num">${code(ib.port)}${cdnEndpoint(ib)}</td>
      <td><div class="bind">${exitLabel(e)}${e.exit_ip ? `<span class="sub-ip">${ltr(e.exit_ip)}</span>` : ''}</div></td>
      <td>${ib.default ? pill(t('ib_auto'), 'acc') : pill(t('ib_manual'), 'vio')}</td>
      <td>${statusBadge(e.status)}</td>
      <td class="act">${menuBtn(items)}</td>
    </tr>`;
  }
  const isWg = r.kind === 'wg';
  const st = r.st;
  return `<tr style="--i:${i}" data-ibrow class="srv-row">
    <td><span class="proto">${icon(isWg ? 'wg' : 'ovpn')}<span>${esc(isWg ? t('proto_wg') : t('proto_ovpn'))}</span>${!isWg && st && st.proto ? `<span class="tag" dir="ltr">${esc(String(st.proto).toUpperCase())}</span>` : ''}</span></td>
    <td class="num">${r.port ? code(r.port) : '—'}</td>
    <td><div class="bind">${st ? egressBinding(st.egress) : '—'}</div></td>
    <td>${pill(t('ib_server'), 'mute')}</td>
    <td>${srvStatus(st)}</td>
    <td class="act">${btn(t('manage'), { kind: 'ghost', sm: true, icon: 'sliders', act: 'ibManage', attrs: `data-k="${r.kind}"` })}</td>
  </tr>`;
}
ACT.ibManage = (b) => {
  const p = document.getElementById('pnl-' + (b.dataset.k === 'wg' ? 'wg' : 'ovpn'));
  if (!p) return;
  if (p.classList.contains('closed')) { const tg = p.querySelector('[data-act="pnl"]'); if (tg) ACT.pnl(tg); }
  p.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'start' });
  p.classList.remove('flash'); void p.offsetWidth; p.classList.add('flash');
};
async function deleteInbound(ib, e) {
  const body = `<div class="cf-item">${icon(protoIcon(ib.protocol))}<b>${esc(ib.label || protoLabel(ib.protocol))}</b>${code(ib.port)}</div>
    <div class="cf-item">${exitLabel(e)}</div><p class="muted">${esc(t('confirm_del_inbound'))}</p>`;
  if (!(await confirmModal({ title: t('del') + ' · ' + t('inbounds'), bodyHtml: body, okText: t('del'), danger: true }))) return;
  try { await api('DELETE', `inbounds/${ib.id}`); toast(t('inbound_deleted')); refreshInbounds(true); }
  catch (err) { toast(err.message, true); }
}
function ibFiltered() {
  const f = IB.filter, q = f.q.trim().toLowerCase();
  return ibRows().filter((r) => {
    if (f.proto !== 'all' && r.proto !== f.proto) return false;
    if (f.exit !== 'all') {
      if (r.kind !== 'xray') {
        const eg = r.st && r.st.egress;
        if (!eg || eg.type !== 'exit' || String(eg.exit_id) !== String(f.exit)) return false;
      } else if (String(r.e.id) !== String(f.exit)) return false;
    }
    if (!q) return true;
    const hay = r.kind === 'xray'
      ? `${r.ib.label} ${r.ib.protocol} ${r.ib.port} ${exitName(r.e)} ${r.e.country} ${r.e.exit_ip}${r.ib.cdn ? ` cloudflare cdn ${r.ib.cdn.host} ${r.ib.cdn.port}` : ''}`
      : `${protoLabel(r.proto)} ${r.port || ''}`;
    return hay.toLowerCase().includes(q);
  });
}
function paintIbTable(stagger) {
  const host = document.getElementById('ibTable');
  if (!host) return;
  const rows = ibFiltered();
  const all = ibRows();
  const cnt = document.getElementById('ibCount'); if (cnt) cnt.textContent = rows.length === all.length ? all.length : `${rows.length}/${all.length}`;
  // protocol chips
  const chips = document.getElementById('ibProtoChips');
  if (chips) {
    const protos = [...new Set(all.map((r) => r.proto))];
    chips.innerHTML = [['all', t('all')]].concat(protos.map((p) => [p, protoLabel(p)])).map(([id, l]) =>
      `<button type="button" class="chipf ${IB.filter.proto === id ? 'on' : ''}" data-act="ibProto" data-p="${esc(id)}">${id === 'all' ? '' : icon(protoIcon(id))}${esc(l)}<b dir="ltr">${id === 'all' ? all.length : all.filter((r) => r.proto === id).length}</b></button>`).join('');
  }
  withScroll(() => {
    host.innerHTML = rows.length ? `<div class="tbl-wrap"><table class="tbl tbl-ib ${stagger ? 'stagger' : ''}">
      <thead><tr><th>${esc(t('protocol'))}</th><th>${esc(t('proxy_port'))}</th><th>${esc(t('bound_exit'))}</th><th>${esc(t('ib_type'))}</th><th>${esc(t('status'))}</th><th class="act"></th></tr></thead>
      <tbody>${rows.map(ibRowHtml).join('')}</tbody></table></div>` : emptyState(t('no_match'), 'search');
  });
}
ACT.ibProto = (b) => { IB.filter.proto = b.dataset.p; paintIbTable(false); };

/* ---- manual inbound creation (preset | v1.0.25 import from config) ---- */
function openInboundModal(exitId, mode) {
  const exits = IB.exits.length ? IB.exits : (LAST_EXITS || []);
  const protos = PROTOCOLS.filter((p) => p.available);
  if (!exits.length) { toast(t('no_exits'), true); return; }
  const m = openModal({
    title: t('new_inbound'), sub: t('new_inbound_sub'), icon: 'inbound', size: 'md',
    body: `<div class="form">
      <div class="seg nib-tabs" role="tablist"><button type="button" class="on" data-nibtab="preset" role="tab">${icon('sliders')}<span>${esc(t('imp_tab_preset'))}</span></button><button type="button" data-nibtab="import" role="tab">${icon('download')}<span>${esc(t('imp_tab_import'))}</span></button></div>
      ${field(t('bound_exit'), `<select id="nibExit">${exits.map((e) => `<option value="${esc(e.id)}" ${e.type === 'direct' ? 'data-icon="server"' : `data-cc="${esc(e.type === 'custom' ? emojiToCc(e.flag) : e.country)}"`} data-label="${esc(exitName(e))}" data-sub="${esc(e.exit_ip || '')}" ${String(e.id) === String(exitId || '') ? 'selected' : ''}>${esc(exitName(e))}</option>`).join('')}</select>`)}
      <div id="nibPreset">
      ${field(t('protocol'), `<select id="nibProto">${protos.map((p) => `<option value="${esc(p.id)}" data-icon="${protoIcon(p.id)}" data-sub="${p.tls ? 'TLS' : ''}">${esc(p.label)}</option>`).join('')}</select>`, { hint: protos.length ? '' : t('no_protocols') })}
      <div class="note nib-xh" id="nibXh" hidden>${icon('cloud')}<span>${esc(t('nib_xhttp_hint'))}</span></div>
      ${field(t('port_optional'), `<input id="nibPort" type="number" min="10000" max="60000" dir="ltr" placeholder="10000 – 60000">`, { hint: t('port_auto_hint') })}
      <div class="note">${icon('info')}<span>${esc(t('ib_manual_note'))}</span></div>
      </div>
      ${impPaneHtml()}
    </div>`,
    footer: `${btn(t('cancel'), { kind: 'ghost', attrs: 'data-x' })}${btn(t('add_inbound'), { kind: 'pri', icon: 'plus', attrs: 'id="nibGo"' })}`,
  });
  const root = m.el;
  let tab = 'preset', preview = null;
  root.querySelector('[data-x]').addEventListener('click', () => m.close());
  const go_ = root.querySelector('#nibGo');
  const setTab = (tb) => {
    tab = tb;
    root.querySelectorAll('[data-nibtab]').forEach((b) => b.classList.toggle('on', b.dataset.nibtab === tb));
    root.querySelector('#nibPreset').hidden = tb !== 'preset';
    root.querySelector('#impPane').hidden = tb !== 'import';
    go_.disabled = tb === 'import' && !preview;
  };
  root.querySelectorAll('[data-nibtab]').forEach((b) => b.addEventListener('click', () => setTab(b.dataset.nibtab)));
  // v1.0.30: XHTTP hint (CDN-friendly transport) under the protocol picker
  const nibProto = root.querySelector('#nibProto'), nibXh = root.querySelector('#nibXh');
  const syncXh = () => { if (nibProto && nibXh) nibXh.hidden = nibProto.value !== 'vless-xhttp-tls'; };
  if (nibProto) nibProto.addEventListener('change', syncXh);
  syncXh();
  const parseBtn = root.querySelector('#impParse');
  const doParse = async () => {
    const link = root.querySelector('#impLink').value.trim();
    impClearErr(root);
    if (!link) { root.querySelector('#impLink').focus(); return; }
    parseBtn.disabled = true; parseBtn.classList.add('loading');
    try {
      const j = await api('POST', 'inbounds/import/parse', { link });
      preview = j;
      const pv = root.querySelector('#impPrev');
      pv.innerHTML = impPreviewHtml(j); pv.hidden = false;
      pv.querySelectorAll('select,input').forEach((el) => el.addEventListener('change', () => impSync(root)));
      impSync(root);
      go_.disabled = false;
    } catch (err) {
      preview = null; root.querySelector('#impPrev').hidden = true; go_.disabled = true;
      impShowErr(root, err);
    } finally { parseBtn.disabled = false; parseBtn.classList.remove('loading'); }
  };
  parseBtn.addEventListener('click', doParse);
  root.querySelector('#impLink').addEventListener('input', () => { if (preview) { preview = null; root.querySelector('#impPrev').hidden = true; go_.disabled = true; } });
  go_.addEventListener('click', async () => {
    const eid = root.querySelector('#nibExit').value;
    if (tab === 'import') {
      if (!preview) return;
      impClearErr(root);
      const portv = root.querySelector('#impPort').value;
      go_.disabled = true; go_.classList.add('loading');
      try {
        await api('POST', `exits/${eid}/inbounds/import`, { spec: impCollect(root), port: portv ? parseInt(portv, 10) : undefined });
        toast(t('inbound_added'));
        m.close();
        setTimeout(() => { if (curView === 'inbounds') refreshInbounds(true); else refreshExitLists(); }, 900);
      } catch (err) { impShowErr(root, err); go_.disabled = false; go_.classList.remove('loading'); }
      return;
    }
    const proto = root.querySelector('#nibProto').value;
    const portv = root.querySelector('#nibPort').value;
    if (!proto) return;
    if (portv && (+portv < 10000 || +portv > 60000)) { toast(t('port_optional'), true); return; }
    go_.disabled = true; go_.classList.add('loading');
    try {
      await api('POST', `exits/${eid}/inbounds`, { protocol: proto, port: portv ? parseInt(portv, 10) : undefined });
      toast(t('inbound_added'));
      m.close();
      setTimeout(() => { if (curView === 'inbounds') refreshInbounds(true); else refreshExitLists(); }, 900);
    } catch (err) { toast(err.message, true); go_.disabled = false; go_.classList.remove('loading'); }
  });
  if (mode === 'import') setTab('import');
}
ACT.newInbound = (b) => openInboundModal(b && b.dataset ? b.dataset.exit : undefined);
ACT.importInbound = (b) => openInboundModal(b && b.dataset ? b.dataset.exit : undefined, 'import');
/* ---- v1.0.25: import an inbound from a client config link ----
   POST inbounds/import/parse {link} -> {spec, port, warnings, remark}
   POST exits/<id>/inbounds/import {spec, port} -> {inbound} | {error, fa, en, detail}
   The modal never closes on an error: the Persian message + the short
   technical detail are shown in place and every field keeps its value. */
const IMP_NETS = ['tcp', 'ws', 'grpc', 'httpupgrade', 'xhttp'];
const IMP_FPS = ['', 'chrome', 'firefox', 'safari', 'ios', 'android', 'edge', 'random', 'randomized'];
const IMP_SS = ['2022-blake3-aes-128-gcm', '2022-blake3-aes-256-gcm', 'aes-128-gcm', 'aes-256-gcm', 'chacha20-ietf-poly1305', 'xchacha20-ietf-poly1305'];
function impSel(id, opts, cur, labelFn) {
  return `<select id="${id}" dir="ltr">${opts.map((o) => `<option value="${esc(o)}" ${String(o) === String(cur ?? '') ? 'selected' : ''}>${esc(labelFn ? labelFn(o) : (o || '—'))}</option>`).join('')}</select>`;
}
function impPaneHtml() {
  return `<div class="imp" id="impPane" hidden>
    ${field(t('imp_link'), `<textarea id="impLink" rows="3" dir="ltr" spellcheck="false" autocomplete="off" placeholder="vless:// · vmess:// · trojan:// · ss:// · hysteria2://"></textarea>`, { hint: t('imp_link_hint') })}
    <div class="imp-act">${btn(t('imp_parse'), { kind: 'ghost', icon: 'search', attrs: 'id="impParse"' })}</div>
    <div class="imp-err" id="impErr" role="alert" hidden></div>
    <div id="impPrev" hidden></div>
  </div>`;
}
function impPreviewHtml(pv) {
  const s = pv.spec;
  const multi = ['vless', 'vmess', 'trojan'].includes(s.proto);
  const secs = s.proto === 'vless' ? ['none', 'tls', 'reality'] : ['none', 'tls'];
  const warn = (pv.warnings || []).map((w) => `<li>${esc(t('imp_w_' + w).replace('{host}', pv.panel_host || ''))}</li>`).join('');
  return `<div class="imp-prev">
    <div class="imp-head">${icon(protoIcon(s.proto === 'ss' ? 'ss' : s.proto))}<b dir="ltr" id="impLabel">${esc(s.label)}</b>${pv.remark ? `<span class="muted" dir="auto">${esc(pv.remark)}</span>` : ''}</div>
    <input type="hidden" id="impProto" value="${esc(s.proto)}">
    <div class="form-grid imp-grid">
      ${multi ? field(t('imp_net'), impSel('impNet', IMP_NETS, s.net)) : ''}
      ${multi ? field(t('imp_sec'), impSel('impSec', secs, s.security)) : ''}
      ${multi ? field('path', `<input id="impPath" dir="ltr" value="${esc(s.path)}" maxlength="256">`, { cls: 'imp-f-path' }) : ''}
      ${multi ? field('host', `<input id="impHost" dir="ltr" value="${esc(s.host)}" maxlength="253">`, { cls: 'imp-f-host' }) : ''}
      ${multi ? field('serviceName', `<input id="impSvc" dir="ltr" value="${esc(s.service_name)}" maxlength="128">`, { cls: 'imp-f-svc' }) : ''}
      ${multi ? field('mode', impSel('impMode', ['auto', 'packet-up', 'stream-up', 'stream-one'], s.xhttp_mode || 'auto'), { cls: 'imp-f-mode' }) : ''}
      ${multi ? field('headerType', impSel('impHdr', ['none', 'http'], s.header_type || 'none'), { cls: 'imp-f-hdr' }) : ''}
      ${s.proto !== 'ss' ? field('SNI', `<input id="impSni" dir="ltr" value="${esc(s.sni)}" maxlength="253">`, { cls: 'imp-f-sni', hint: t('imp_sni_hint') }) : ''}
      ${multi ? field('ALPN', `<input id="impAlpn" dir="ltr" value="${esc((s.alpn || []).join(','))}" placeholder="h2,http/1.1">`, { cls: 'imp-f-alpn' }) : ''}
      ${multi ? field('fingerprint', impSel('impFp', IMP_FPS, s.fp), { cls: 'imp-f-fp' }) : ''}
      ${multi ? field('flow', impSel('impFlow', ['', 'xtls-rprx-vision'], s.flow), { cls: 'imp-f-flow' }) : ''}
      ${multi ? field('shortId', `<input id="impSid" dir="ltr" value="${esc(s.short_id)}" maxlength="16">`, { cls: 'imp-f-sid', hint: t('imp_sid_hint') }) : ''}
      ${s.proto === 'ss' ? field(t('imp_method'), impSel('impMethod', IMP_SS.includes(s.ss_method) ? IMP_SS : [s.ss_method, ...IMP_SS], s.ss_method)) : ''}
      ${field(t('imp_port'), `<input id="impPort" type="number" min="10000" max="60000" dir="ltr" value="${esc(pv.port ?? '')}">`, { hint: t('imp_port_hint') + (pv.orig_port ? ' · ' + t('imp_orig_port') + ' ' + pv.orig_port : '') })}
    </div>
    ${warn ? `<ul class="imp-warn">${warn}</ul>` : ''}
    <div class="note">${icon('info')}<span>${esc(t('imp_note'))}</span></div>
  </div>`;
}
function impSync(root) {
  const v = (id) => { const x = root.querySelector('#' + id); return x ? x.value : ''; };
  const show = (cls, on) => root.querySelectorAll('.' + cls).forEach((el) => { el.hidden = !on; });
  const proto = v('impProto'), net = v('impNet'), sec = v('impSec') || (proto === 'hysteria2' ? 'tls' : 'none');
  if (!['vless', 'vmess', 'trojan'].includes(proto)) return;
  const hdr = v('impHdr');
  show('imp-f-path', ['ws', 'httpupgrade', 'xhttp'].includes(net) || (net === 'tcp' && hdr === 'http'));
  show('imp-f-host', ['ws', 'httpupgrade', 'xhttp'].includes(net) || (net === 'tcp' && hdr === 'http'));
  show('imp-f-svc', net === 'grpc');
  show('imp-f-mode', net === 'xhttp');
  show('imp-f-hdr', net === 'tcp' && sec === 'none');
  show('imp-f-sni', sec !== 'none');
  show('imp-f-alpn', sec === 'tls');
  show('imp-f-fp', sec !== 'none');
  show('imp-f-flow', proto === 'vless' && net === 'tcp' && sec !== 'none');
  show('imp-f-sid', sec === 'reality');
}
function impCollect(root) {
  const v = (id) => { const x = root.querySelector('#' + id); return x ? x.value.trim() : ''; };
  const proto = v('impProto');
  const spec = { proto };
  if (proto === 'ss') { spec.ss_method = v('impMethod'); spec.net = 'tcp'; spec.security = 'none'; return spec; }
  if (proto === 'hysteria2') { spec.security = 'tls'; spec.net = 'tcp'; spec.sni = v('impSni'); spec.alpn = ['h3']; return spec; }
  Object.assign(spec, { net: v('impNet'), security: v('impSec'), path: v('impPath'), host: v('impHost'), service_name: v('impSvc'),
    xhttp_mode: v('impMode'), header_type: v('impHdr'), sni: v('impSni'), fp: v('impFp'), flow: v('impFlow'), short_id: v('impSid'),
    alpn: v('impAlpn') ? v('impAlpn').split(',').map((x) => x.trim()).filter(Boolean) : [] });
  // hidden fields never leak a stale value into the request
  root.querySelectorAll('.imp-grid .field[hidden]').forEach((f) => {
    const inp = f.querySelector('input,select'); if (!inp) return;
    const key = { impPath: 'path', impHost: 'host', impSvc: 'service_name', impMode: 'xhttp_mode', impHdr: 'header_type', impSni: 'sni', impAlpn: 'alpn', impFp: 'fp', impFlow: 'flow', impSid: 'short_id' }[inp.id];
    if (key) spec[key] = key === 'alpn' ? [] : (key === 'header_type' ? 'none' : '');
  });
  return spec;
}
function impShowErr(root, err) {
  const box = root.querySelector('#impErr');
  const d = (err && err.data) || {};
  const fa = LANG === 'en' ? (d.en || err.message) : (d.fa || err.message);
  box.innerHTML = `<div class="imp-err-m">${icon('alert')}<span>${esc(fa || t('err_generic'))}</span></div>${d.error || d.detail ? `<code class="mono imp-err-d" dir="ltr">${esc([d.error, d.detail].filter(Boolean).join(' · '))}</code>` : ''}`;
  box.hidden = false;
}
function impClearErr(root) { const b = root.querySelector('#impErr'); if (b) { b.hidden = true; b.innerHTML = ''; } }


/* ---- WireGuard / OpenVPN server panels ---- */
function protoEgressToSend(e) { if (!e || e.type === 'direct') return { type: 'direct' }; return { type: 'exit', exit_id: e.exit_id }; }
function protoEgressSelectValue(e) { if (!e || e.type === 'direct') return 'direct'; return 'exit:' + String(e.exit_id); }
function protoEgressOptionsHtml(cur) {
  if (!PROTO_EGRESS) return `<option value="direct" data-icon="server">${esc(t('proto_egress_loading'))}</option>`;
  const d = PROTO_EGRESS.direct || {};
  const opts = [`<option value="direct" data-icon="server" data-sub="${esc((d.ip || '') + ' · ' + t('score') + ' ' + (d.score ?? 3))}">${esc(t('proto_direct'))}</option>`];
  (PROTO_EGRESS.exits || []).forEach((x) => {
    PROTO_EXIT_BY_KEY.set(String(x.exit_id), x);
    opts.push(`<option value="exit:${esc(String(x.exit_id))}" data-cc="${esc(x.country || '')}" data-sub="${esc((x.ip || '') + ' · ' + t('score') + ' ' + (x.score ?? 0))}">${esc(ccName(x.country, x.country))}</option>`);
  });
  if (cur && cur.type === 'exit' && !PROTO_EXIT_BY_KEY.has(String(cur.exit_id))) {
    PROTO_EXIT_BY_KEY.set(String(cur.exit_id), cur);
    opts.push(`<option value="exit:${esc(String(cur.exit_id))}" data-cc="${esc(cur.country || '')}" data-sub="${esc(cur.ip || '')}">${esc(ccName(cur.country, cur.country))}</option>`);
  }
  return opts.join('');
}
function protoEgressFromSelectValue(v) {
  if (v === 'direct' || !v) return { type: 'direct' };
  const x = PROTO_EXIT_BY_KEY.get(v.replace(/^exit:/, ''));
  if (!x) return { type: 'direct' };
  return { type: 'exit', exit_id: x.exit_id };
}
function fmtHandshake(s) { if (s === null || s === undefined) return t('proto_handshake_never'); return `${fmtDur(s)} ${t('proto_handshake_ago')}`; }
function fmtProtoBytes(v) { return v === null || v === undefined ? '—' : fmtBytes(v); }
function protoFileName(name, suffix) { return String(name || 'user').trim().replace(/\s+/g, '-') + suffix; }
function showWgQr(confText, name) {
  const m = openModal({
    title: `${t('proto_wg_qr_title')} — ${name}`, icon: 'qr', size: 'md',
    body: `<div class="qrwrap"><canvas class="qrc"></canvas></div>
      <details class="conf-d"><summary>${esc(t('proto_conf_text'))}</summary><pre class="conf" dir="ltr"></pre></details>`,
    footer: `${btn(t('proto_download_conf'), { kind: 'ghost', icon: 'download', attrs: 'data-dl' })}${btn(t('copy'), { kind: 'pri', icon: 'copy', attrs: 'data-cp' })}`,
  });
  m.el.querySelector('pre').textContent = confText;
  drawQr(m.el.querySelector('canvas'), confText);
  m.el.querySelector('[data-cp]').addEventListener('click', (e) => copyText(confText, e.currentTarget));
  m.el.querySelector('[data-dl]').addEventListener('click', () => downloadText(protoFileName(name, '-wireguard.conf'), confText));
}
function srvConfigHtml(kind, st) {
  const isWg = kind === 'wg';
  const P = isWg ? 'wg' : 'ovpn';
  const port = isWg ? st.listen_port : st.port;
  return `<div class="srv-cfg">
    ${toggleRow(P + 'Enable', t('proto_enabled_lbl'), st.enabled, { attrs: st.available ? '' : 'disabled', hint: !st.available ? t('proto_unavailable_hint') : '' })}
    ${field(isWg ? t('proto_listen_port') : t('proto_port'), `<div class="inline-f"><input id="${P}Port" type="number" min="1" max="65535" dir="ltr" value="${port ?? ''}" ${st.enabled ? 'disabled' : ''}>${btn(t('proto_save_port'), { kind: 'soft', sm: true, attrs: `id="${P}SavePort" ${st.enabled ? 'disabled' : ''}` })}</div>`, { hint: st.enabled ? t('proto_port_note') : '' })}
    ${field(t('proto_egress'), `<select id="${P}Egress" ${st.available ? '' : 'disabled'}>${protoEgressOptionsHtml(st.egress)}</select>`)}
    ${isWg ? field(t('proto_server_pubkey'), `<div class="inline-f"><input readonly dir="ltr" value="${esc(st.server_pubkey || '—')}">${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', iconOnly: true, attrs: `data-act="copyv" data-v="${esc(st.server_pubkey || '')}"` })}</div>`) : ''}
    <div class="srv-meta">${isWg && typeof st.kernel === 'string' && st.kernel ? kv(t('proto_kernel'), st.kernel, { ltr: true }) : ''}${!isWg && st.proto ? kv(t('protocol'), String(st.proto).toUpperCase(), { ltr: true }) : ''}</div>
  </div>`;
}
ACT.copyv = (b) => copyText(b.dataset.v || '', b);
function wgPeersHtml(wg, users) {
  const peers = wg.peers || [];
  if (!users.length) return emptyState(t('proto_no_users'), 'users');
  return `<div class="tbl-wrap"><table class="tbl tbl-peers"><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('proto_allowed_ip'))}</th><th>${esc(t('proto_handshake'))}</th><th>${esc(t('proto_rx'))}</th><th>${esc(t('proto_tx'))}</th><th>${esc(t('active'))}</th><th class="act"></th></tr></thead><tbody>
    ${users.map((u) => {
      const uid = String(u.id);
      const p = peers.find((x) => String(x.user_id) === uid);
      if (!p) return `<tr class="dim"><td><span class="un"><span class="ava">${initials(u.name)}</span>${esc(u.name)}</span></td><td colspan="5" class="muted">${esc(t('proto_no_peer'))}</td>
        <td class="act">${btn(t('proto_create'), { kind: 'soft', sm: true, icon: 'plus', act: 'wgCreate', attrs: `data-uid="${esc(uid)}"` })}</td></tr>`;
      const nm = p.name || u.name;
      return `<tr><td><span class="un"><span class="ava ${p.last_handshake_s !== null && p.last_handshake_s !== undefined && p.last_handshake_s < 180 ? 'ava-on' : ''}">${initials(nm)}</span>${esc(nm)}</span></td>
        <td>${code(p.allowed_ip || '—')}</td><td class="muted">${esc(fmtHandshake(p.last_handshake_s))}</td>
        <td class="num" dir="ltr">${esc(fmtProtoBytes(p.rx_bytes))}</td><td class="num" dir="ltr">${esc(fmtProtoBytes(p.tx_bytes))}</td>
        <td><span class="switch sm"><input type="checkbox" data-wgtoggle="${esc(uid)}" ${p.enabled ? 'checked' : ''} aria-label="${esc(t('active'))}"><i></i></span></td>
        <td class="act"><span class="act-g">${btn(t('proto_qr'), { kind: 'ghost', sm: true, icon: 'qr', iconOnly: true, act: 'wgQr', attrs: `data-uid="${esc(uid)}" data-name="${esc(nm)}"` })}${menuBtn([
          { icon: 'download', label: t('proto_download_conf'), run: () => wgDownload(uid, nm) },
          '-', { icon: 'x', label: t('proto_revoke'), danger: true, run: () => wgRevoke(uid, nm) }])}</span></td></tr>`;
    }).join('')}</tbody></table></div>`;
}
function ovpnUsersHtml(ov, users) {
  const recs = ov.users || [];
  if (!users.length) return emptyState(t('proto_no_users'), 'users');
  return `<div class="tbl-wrap"><table class="tbl tbl-peers"><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('status'))}</th><th>${esc(t('proto_rx'))}</th><th>${esc(t('proto_tx'))}</th><th>${esc(t('active'))}</th><th class="act"></th></tr></thead><tbody>
    ${users.map((u) => {
      const uid = String(u.id);
      const r = recs.find((x) => String(x.user_id) === uid);
      if (!r) return `<tr class="dim"><td><span class="un"><span class="ava">${initials(u.name)}</span>${esc(u.name)}</span></td><td colspan="4" class="muted">${esc(t('proto_no_peer'))}</td>
        <td class="act">${btn(t('proto_create'), { kind: 'soft', sm: true, icon: 'plus', act: 'ovpnCreate', attrs: `data-uid="${esc(uid)}"` })}</td></tr>`;
      const nm = r.name || u.name;
      const conn = r.connected === null || r.connected === undefined ? pill(t('proto_stats_na'), 'mute') : r.connected ? pill(t('proto_connected'), 'ok', { dot: true }) : pill(t('proto_not_connected'), 'mute', { dot: true });
      return `<tr><td><span class="un"><span class="ava ${r.connected ? 'ava-on' : ''}">${initials(nm)}</span>${esc(nm)}</span></td><td>${conn}</td>
        <td class="num" dir="ltr">${esc(fmtProtoBytes(r.rx_bytes))}</td><td class="num" dir="ltr">${esc(fmtProtoBytes(r.tx_bytes))}</td>
        <td><span class="switch sm"><input type="checkbox" data-ovpntoggle="${esc(uid)}" ${r.enabled ? 'checked' : ''} aria-label="${esc(t('active'))}"><i></i></span></td>
        <td class="act"><span class="act-g">${btn(t('proto_download_ovpn'), { kind: 'ghost', sm: true, icon: 'download', iconOnly: true, act: 'ovpnDl', attrs: `data-uid="${esc(uid)}" data-name="${esc(nm)}"` })}${menuBtn([
          { icon: 'x', label: t('proto_revoke'), danger: true, run: () => ovpnRevoke(uid, nm) }])}</span></td></tr>`;
    }).join('')}</tbody></table></div>`;
}
function srvPanelBody(kind) {
  const st = kind === 'wg' ? IB.wg : IB.ov;
  const err = kind === 'wg' ? IB.wgErr : IB.ovErr;
  if (!st) return errorBox(err || t('proto_unavailable_hint'));
  return `<div class="srv">${srvConfigHtml(kind, st)}<div class="srv-users"><h3 class="sub-h">${esc(t('proto_users'))}</h3>${kind === 'wg' ? wgPeersHtml(st, IB.users) : ovpnUsersHtml(st, IB.users)}</div></div>`;
}
async function protoSaveWg(patch) {
  const cur = LAST_WG || {};
  await api('POST', 'wg/config', {
    enabled: patch.enabled !== undefined ? patch.enabled : !!cur.enabled,
    listen_port: patch.listen_port !== undefined ? patch.listen_port : cur.listen_port,
    egress: protoEgressToSend(patch.egress !== undefined ? patch.egress : cur.egress),
  });
}
async function protoSaveOvpn(patch) {
  const cur = LAST_OVPN || {};
  await api('POST', 'ovpn/config', {
    enabled: patch.enabled !== undefined ? patch.enabled : !!cur.enabled,
    port: patch.port !== undefined ? patch.port : cur.port,
    egress: protoEgressToSend(patch.egress !== undefined ? patch.egress : cur.egress),
  });
}
function bindSrv(kind) {
  const P = kind === 'wg' ? 'wg' : 'ovpn';
  const save = kind === 'wg' ? protoSaveWg : protoSaveOvpn;
  const cur = kind === 'wg' ? LAST_WG : LAST_OVPN;
  const sel = document.getElementById(P + 'Egress');
  if (sel && cur) { sel.value = protoEgressSelectValue(cur.egress); syncDD(sel); }
  const en = document.getElementById(P + 'Enable');
  if (en) en.addEventListener('change', async () => {
    try { await save({ enabled: en.checked }); toast(t('saved')); } catch (err) { toast(err.message, true); }
    refreshInbounds(true);
  });
  if (sel) sel.addEventListener('change', async () => {
    try { await save({ egress: protoEgressFromSelectValue(sel.value) }); toast(t('saved')); } catch (err) { toast(err.message, true); }
    refreshInbounds(true);
  });
  const pb = document.getElementById(P + 'SavePort');
  if (pb) pb.addEventListener('click', async () => {
    const v = parseInt((document.getElementById(P + 'Port') || {}).value || '', 10);
    if (!v || v < 1 || v > 65535) return toast(kind === 'wg' ? t('proto_listen_port') : t('proto_port'), true);
    try { await save(kind === 'wg' ? { listen_port: v } : { port: v }); toast(t('saved')); refreshInbounds(true); }
    catch (err) { toast(err.message, true); }
  });
}
document.addEventListener('change', async (e) => {
  const w = e.target.closest && e.target.closest('[data-wgtoggle]');
  const o = e.target.closest && e.target.closest('[data-ovpntoggle]');
  if (w) {
    try { await api('POST', `wg/peer/${encodeURIComponent(w.dataset.wgtoggle)}/toggle`, { enabled: w.checked }); toast(t('saved')); } catch (err) { toast(err.message, true); }
    refreshInbounds(true);
  } else if (o) {
    try { await api('POST', `ovpn/user/${encodeURIComponent(o.dataset.ovpntoggle)}/toggle`, { enabled: o.checked }); toast(t('saved')); } catch (err) { toast(err.message, true); }
    refreshInbounds(true);
  }
});
ACT.wgCreate = async (b) => {
  b.disabled = true;
  try { await api('POST', 'wg/peer', { user_id: b.dataset.uid }); toast(t('proto_created')); refreshInbounds(true); }
  catch (err) { toast(err.message, true); b.disabled = false; }
};
ACT.ovpnCreate = async (b) => {
  // No dedicated create endpoint in the contract — toggle-enable provisions (as before).
  b.disabled = true;
  try { await api('POST', `ovpn/user/${encodeURIComponent(b.dataset.uid)}/toggle`, { enabled: true }); toast(t('proto_created')); refreshInbounds(true); }
  catch (err) { toast(err.message, true); b.disabled = false; }
};
ACT.wgQr = async (b) => {
  try { const r = await api('GET', `wg/peer/${encodeURIComponent(b.dataset.uid)}/conf`); showWgQr(r.conf, b.dataset.name || b.dataset.uid); }
  catch (err) { toast(err.message, true); }
};
async function wgDownload(uid, name) {
  try { const r = await api('GET', `wg/peer/${encodeURIComponent(uid)}/conf`); downloadText(protoFileName(name, '-wireguard.conf'), r.conf); }
  catch (err) { toast(err.message, true); }
}
async function wgRevoke(uid, name) {
  const body = `<div class="cf-item"><b>${esc(name)}</b></div><p class="muted">${esc(t('proto_confirm_revoke_wg'))}</p>`;
  if (!(await confirmModal({ title: t('proto_revoke'), bodyHtml: body, okText: t('proto_revoke'), danger: true }))) return;
  try { await api('POST', `wg/peer/${encodeURIComponent(uid)}/revoke`); toast(t('proto_revoked')); refreshInbounds(true); }
  catch (err) { toast(err.message, true); }
}
ACT.ovpnDl = async (b) => {
  try { const r = await api('GET', `ovpn/user/${encodeURIComponent(b.dataset.uid)}/ovpn`); downloadText(protoFileName(b.dataset.name, '-openvpn.ovpn'), r.ovpn); }
  catch (err) { toast(err.message, true); }
};
async function ovpnRevoke(uid, name) {
  const body = `<div class="cf-item"><b>${esc(name)}</b></div><p class="muted">${esc(t('proto_confirm_revoke_ovpn'))}</p>`;
  if (!(await confirmModal({ title: t('proto_revoke'), bodyHtml: body, okText: t('proto_revoke'), danger: true }))) return;
  try { await api('POST', `ovpn/user/${encodeURIComponent(uid)}/revoke`); toast(t('proto_revoked')); refreshInbounds(true); }
  catch (err) { toast(err.message, true); }
}
async function tryProtoApi(path) { try { return await api('GET', path); } catch (e) { return { _err: e.message }; } }

async function refreshInbounds(force) {
  const el = $('#view-inbounds');
  if (!el || !el.dataset.built) return;
  if (!force && isTyping(el)) return;
  const [ex, eg, wg, ov, ur] = await Promise.all([tryProtoApi('exits'), tryProtoApi('protocols/egress'), tryProtoApi('wg/status'), tryProtoApi('ovpn/status'), tryProtoApi('users')]);
  if (!ex._err) { IB.exits = ex.exits || []; PROTOCOLS = ex.protocols || PROTOCOLS; LAST_EXITS = IB.exits; }
  PROTO_EGRESS = eg._err ? null : eg; IB.egErr = eg._err || null;
  IB.wg = wg._err ? null : wg; IB.wgErr = wg._err || null; LAST_WG = IB.wg;
  IB.ov = ov._err ? null : ov; IB.ovErr = ov._err || null; LAST_OVPN = IB.ov;
  IB.users = ur._err ? [] : (ur.users || []); IB.usersErr = ur._err || null;
  const snap = JSON.stringify([ex, eg, wg, ov, IB.users.map((u) => [u.id, u.name])]);
  if (!force && snap === IB.snap) return;
  const first = IB.snap === null;
  IB.snap = snap;
  paintIbTable(first);
  if (ex._err) { const h = document.getElementById('ibTable'); if (h) h.innerHTML = errorBox(ex._err); }
  // exit filter dropdown
  const fx = document.getElementById('ibExitF');
  if (fx && document.activeElement !== fx) {
    const val = IB.filter.exit;
    fx.innerHTML = `<option value="all" data-icon="exit">${esc(t('all_exits'))}</option>` + IB.exits.map((e) => `<option value="${esc(e.id)}" ${e.type === 'direct' ? 'data-icon="server"' : `data-cc="${esc(e.type === 'custom' ? emojiToCc(e.flag) : e.country)}"`} data-label="${esc(exitName(e))}">${esc(exitName(e))}</option>`).join('');
    fx.value = [...fx.options].some((o) => o.value === val) ? val : 'all';
    IB.filter.exit = fx.value; syncDD(fx);
  }
  ['wg', 'ovpn'].forEach((k) => {
    const b = document.querySelector(`#pnl-${k} .pnl-b`);
    if (!b) return;
    if (!force && isTyping(b)) return;
    withScroll(() => { b.innerHTML = srvPanelBody(k); });
    enhanceSelects(b);
    bindSrv(k);
    const h = document.querySelector(`#pnl-${k} .pnl-sub`);
    if (h) h.innerHTML = srvStatus(k === 'wg' ? IB.wg : IB.ov);
  });
  const errs = [IB.egErr, IB.usersErr].filter(Boolean);
  const eb = document.getElementById('ibErr'); if (eb) eb.innerHTML = errs.map(errorBox).join('');
}
RENDER.inbounds = async function renderInbounds() {
  const el = $('#view-inbounds');
  if (ROUTE.q && ROUTE.q.exit) IB.filter.exit = ROUTE.q.exit;
  if (!el.dataset.built) {
    el.dataset.built = '1';
    IB.snap = null;
    el.innerHTML = `
      ${panel({ id: 'ib', title: t('all_inbounds'), ic: 'inbound', count: '…', cls: 'pnl-flush',
        actions: btn(t('imp_tab_import'), { kind: 'ghost', sm: true, icon: 'download', act: 'importInbound' }) + btn(t('new_inbound'), { kind: 'pri', sm: true, icon: 'plus', act: 'newInbound' }),
        body: `<div class="toolbar">
          <div class="search">${icon('search')}<input type="search" id="ibSearch" data-search placeholder="${esc(t('search_inbounds'))}" autocomplete="off"></div>
          <div class="tb-sel"><select id="ibExitF"><option value="all" data-icon="exit">${esc(t('all_exits'))}</option></select></div>
        </div>
        <div class="chipbar" id="ibProtoChips"></div>
        <div id="ibTable">${skeleton(4, 36)}</div>
        <div class="legend">${pill(t('ib_auto'), 'acc')}<span>${esc(t('ib_auto_hint'))}</span>${pill(t('ib_manual'), 'vio')}<span>${esc(t('ib_manual_hint'))}</span></div>` })}
      <div id="ibErr"></div>
      <div class="srv-grid">
        ${panel({ id: 'wg', title: t('proto_wg'), ic: 'wg', collapsible: true, sub: '', body: skeleton(3, 34) })}
        ${panel({ id: 'ovpn', title: t('proto_ovpn'), ic: 'ovpn', collapsible: true, sub: '', body: skeleton(3, 34) })}
      </div>
      ${panel({ id: 'tgp', title: t('set_proxy'), ic: 'tg', collapsible: true, sub: `<span class="muted">${esc(t('proxy_sponsor_hint'))}</span>`, body: `<div id="proxyCreate"></div><div id="proxyList">${skeleton(2, 90)}</div>` })}
      <p class="foot-note">${icon('info')}${esc(t('proto_sub'))}</p>`;
    el.querySelector('#pnl-ib .pnl-n').id = 'ibCount';
    enhanceSelects(el);
    const s = $('#ibSearch');
    s.addEventListener('input', () => { IB.filter.q = s.value; paintIbTable(false); });
    $('#ibExitF').addEventListener('change', (e) => { IB.filter.exit = e.target.value; paintIbTable(false); });
  }
  renderProxy().catch(() => {});
  await refreshInbounds(true);
};
POLL.inbounds = [() => { refreshInbounds(false); refreshProxyList(false); }, 5000];
/* =====================================================================
   v1.0.29 — per-inbound CDN front (Cloudflare) for VLESS/VMess · WS · TLS
   (v1.0.30: also VLESS · XHTTP · TLS — its link uses xhttp packet-up).
   PUT    exits/<id>/inbounds/<ib>/cdn  {host, port, address?} -> {inbound}
   DELETE exits/<id>/inbounds/<ib>/cdn                           -> {inbound}
   Only the subscription link changes (address:port, sni/host = cdn.host,
   remark + " — Cloudflare"); the Xray inbound itself is untouched.
   ===================================================================== */
ICONS.cloud = '<path d="M7 18.5h10.5a4 4 0 00.6-7.95A6 6 0 006.4 9.6 4.5 4.5 0 007 18.5z"/>';
const CDN_PROTOS = ['vless-ws-tls', 'vmess-ws-tls', 'vless-xhttp-tls'];
const CDN_PORTS = [443, 2053, 2083, 2087, 2096, 8443];
const CDN_HOST_RE = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z](?:[a-z0-9-]{0,61}[a-z0-9])?$/;
const CDN_IPV4_RE = /^(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}$/;
const CDN_IPV6_RE = /^[0-9a-f:.]+$/i;
function cdnCapable(ib) { return !!ib && !ib.default && CDN_PROTOS.includes(ib.protocol); }
function cdnBadge(ib) {
  if (!ib || !ib.cdn) return '';
  return `<span class="tag tag-cf" title="${esc(t('cdn_badge_t'))}">${icon('cloud')}Cloudflare</span>`;
}
function cdnEndpoint(ib) {
  if (!ib || !ib.cdn) return '';
  const c = ib.cdn;
  return `<span class="sub-ip cdn-ep" dir="ltr">${esc((c.address || c.host) + ':' + c.port)}</span>`;
}
function cdnDigits(v) { return String(v || '').replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)); }
function cdnHostOk(h) { return CDN_HOST_RE.test(h) && !CDN_IPV4_RE.test(h); }
// -> {ok, cdn} | {ok:false, field, key}
function cdnValidate(host, port, addr) {
  const h = String(host || '').trim().replace(/\.$/, '').toLowerCase();
  if (!cdnHostOk(h)) return { ok: false, field: 'host', key: 'cdn_err_host' };
  const p = parseInt(cdnDigits(port), 10);
  if (!CDN_PORTS.includes(p)) return { ok: false, field: 'port', key: 'cdn_err_port' };
  let a = cdnDigits(addr).trim().replace(/^\[(.*)\]$/, '$1');
  if (a) {
    const al = a.replace(/\.$/, '').toLowerCase();
    if (CDN_IPV4_RE.test(al) || cdnHostOk(al)) a = al;
    else if (!(a.includes(':') && CDN_IPV6_RE.test(a))) return { ok: false, field: 'addr', key: 'cdn_err_addr' };
  }
  const cdn = { host: h, port: p };
  if (a && a !== h) cdn.address = a;
  return { ok: true, cdn };
}
const CDN_ERR_FIELD = { bad_cdn_host: 'host', bad_cdn_port: 'port', bad_cdn_address: 'addr' };
function openCdnModal(ib, e) {
  const c = ib.cdn || {};
  const m = openModal({
    title: t('cdn_title'), sub: t('cdn_sub'), icon: 'cloud', size: 'md',
    body: `<div class="form cdn-form">
      <div class="cf-item">${icon(protoIcon(ib.protocol))}<b>${esc(ib.label || protoLabel(ib.protocol))}</b>${code(ib.port)}${cdnBadge(ib)}</div>
      <div class="cf-item">${exitLabel(e)}</div>
      ${field(t('cdn_host'), `<input id="cdnHost" dir="ltr" maxlength="253" autocomplete="off" spellcheck="false" placeholder="cdn.example.com" value="${esc(c.host || '')}">`, { cls: 'cdn-f-host', hint: t('cdn_host_hint') })}
      <div class="form-grid cdn-grid">
        ${field(t('cdn_port'), `<select id="cdnPort" dir="ltr">${CDN_PORTS.map((p) => `<option value="${p}" ${Number(c.port || 443) === p ? 'selected' : ''}>${p}</option>`).join('')}</select>`, { cls: 'cdn-f-port' })}
        ${field(t('cdn_addr'), `<input id="cdnAddr" dir="ltr" maxlength="253" autocomplete="off" spellcheck="false" placeholder="${esc(t('cdn_addr_ph'))}" value="${esc(c.address || '')}">`, { cls: 'cdn-f-addr', hint: t('cdn_addr_hint') })}
      </div>
      <div class="cdn-err" id="cdnErr" role="alert" hidden></div>
      <div class="note">${icon('info')}<span>${esc(t('cdn_note'))}</span></div>
    </div>`,
    footer: `${ib.cdn ? btn(t('cdn_remove'), { kind: 'danger', icon: 'trash', attrs: 'id="cdnDel"' }) : ''}<span class="f-sp"></span>${btn(t('cancel'), { kind: 'ghost', attrs: 'data-x' })}${btn(t('cdn_save'), { kind: 'pri', icon: 'check', attrs: 'id="cdnGo"' })}`,
  });
  const root = m.el;
  const fld = { host: root.querySelector('#cdnHost'), port: root.querySelector('#cdnPort'), addr: root.querySelector('#cdnAddr') };
  const errBox = root.querySelector('#cdnErr');
  const clearErr = () => { errBox.hidden = true; errBox.textContent = ''; Object.values(fld).forEach((x) => x.classList.remove('invalid')); };
  const showErr = (f, msg) => {
    clearErr();
    errBox.innerHTML = `${icon('alert')}<span></span>`; errBox.querySelector('span').textContent = msg; errBox.hidden = false;
    if (f && fld[f]) { fld[f].classList.add('invalid'); if (fld[f].focus) fld[f].focus(); }
  };
  Object.values(fld).forEach((x) => x.addEventListener('input', clearErr));
  fld.port.addEventListener('change', clearErr);
  root.querySelector('[data-x]').addEventListener('click', () => m.close());
  const go_ = root.querySelector('#cdnGo');
  const save = async () => {
    const v = cdnValidate(fld.host.value, fld.port.value, fld.addr.value);
    if (!v.ok) { showErr(v.field, t(v.key)); return; }
    go_.disabled = true; go_.classList.add('loading');
    try {
      await api('PUT', `exits/${encodeURIComponent(e.id)}/inbounds/${encodeURIComponent(ib.id)}/cdn`, v.cdn);
      toast(t('cdn_saved')); m.close(); refreshInbounds(true);
    } catch (err) {
      const d = err.data || {};
      showErr(CDN_ERR_FIELD[d.error], err.message || t('err_generic'));
      go_.disabled = false; go_.classList.remove('loading');
    }
  };
  go_.addEventListener('click', save);
  [fld.host, fld.addr].forEach((x) => x.addEventListener('keydown', (ev) => { if (ev.key === 'Enter') { ev.preventDefault(); save(); } }));
  const del = root.querySelector('#cdnDel');
  if (del) del.addEventListener('click', async () => {
    if (!(await confirmModal({ title: t('cdn_remove'), bodyHtml: `<p class="muted">${esc(t('cdn_confirm_remove'))}</p>`, okText: t('cdn_remove'), danger: true }))) return;
    del.disabled = true;
    try {
      await api('DELETE', `exits/${encodeURIComponent(e.id)}/inbounds/${encodeURIComponent(ib.id)}/cdn`);
      toast(t('cdn_removed')); m.close(); refreshInbounds(true);
    } catch (err) { showErr(null, err.message || t('err_generic')); del.disabled = false; }
  });
  setTimeout(() => fld.host.focus(), 60);
  return m;
}
/* =====================================================================
   Exits — sources (VPN Gate / MooProxy / Custom), hunts and the exit list.
   No inbound editing here: each exit links to its inbounds.
   ===================================================================== */
const NARROW = () => window.innerWidth < 700;
const viewKey = (k) => k + (NARROW() ? '_m' : '');
function withScroll(fn) {
  const x = window.scrollX, y = window.scrollY;
  fn();
  const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  window.scrollTo(x, Math.min(y, maxY));
}
const SEL_EXITS = new Set();
let LAST_EXITS = [];
let LAST_EXIT_SNAP = null;
const EX = { filter: { q: '', st: 'all' }, mode: localStorage.getItem(viewKey('cp_exits_view')) || (NARROW() ? 'cards' : 'table'), src: 'vpngate', first: true };

function exitSnap(exits) {
  return JSON.stringify((exits || []).map((e) => [e.id, e.status, e.exit_ip, e.score, e.xray_active, e.no_nodes, (e.inbounds || []).length,
    e.hunt ? [e.hunt.status, e.hunt.tried_total, e.hunt.elapsed_s, (e.hunt.currents || []).length, (e.hunt.recent || []).length] : null]));
}
function anyActiveHunt(exits) { return (exits || []).some((e) => e.hunt && (e.hunt.status === 'running' || e.hunt.status === 'pending')); }

/* ---- hunt progress ---- */
function huntOutcomeBadge(r) {
  if (r.outcome === 'clean') return `${pill(t('oc_clean'), 'ok')} ${scoreBadge(r.score)}`;
  if (r.outcome === 'dirty') return `${pill(t('oc_dirty'), 'bad')} ${scoreBadge(r.score)}`;
  if (r.outcome === 'timeout') return pill(t('oc_timeout'), 'warn');
  if (r.outcome === 'no-score') return pill(t('oc_noscore'), 'mute');
  return pill(t('oc_connect'), 'mute');
}
function huntCandTable(h) {
  const cur = (h.currents || []).map((c) => `<tr class="live-row"><td><span class="nd">${esc(c.host || '')}</span>${code(c.ip || '')}</td><td><span class="spin"></span> ${esc(t('checking_lbl'))}</td><td>—</td></tr>`).join('');
  const rec = (h.recent || []).map((r) => `<tr><td><span class="nd">${esc(r.host || '')}</span>${code(r.ip || '')}</td><td>${huntOutcomeBadge(r)}</td><td class="num" dir="ltr">${r.secs != null ? esc(r.secs) + 's' : '—'}</td></tr>`).join('');
  if (!cur && !rec) return '';
  return `<details class="hunt-d" ${cur ? 'open' : ''}><summary>${esc(t('candidates'))} <b dir="ltr">${(h.currents || []).length + (h.recent || []).length}</b></summary>
    <div class="tbl-wrap"><table class="tbl tbl-mini"><thead><tr><th>${esc(t('node'))}</th><th>${esc(t('result_lbl'))}</th><th>${esc(t('elapsed_lbl'))}</th></tr></thead><tbody>${cur}${rec}</tbody></table></div></details>`;
}
function huntHtml(h) {
  if (!h || h.status === 'done') return '';
  const pend = h.status === 'pending';
  const pct = h.total ? Math.min(100, (h.tried_total / h.total) * 100) : 0;
  return `<div class="hunt ${pend ? 'hunt-pend' : ''}">
    <div class="hunt-h">${pend ? icon('clock') : '<span class="radar"><i></i></span>'}<b>${esc(pend ? t('hunt_pending') : t('searching_clean'))}</b>
      <span class="hunt-k">${kv(t('tried_lbl'), `${h.tried_total}${h.total ? ' / ' + h.total : ''}`, { ltr: true })}${kv(t('elapsed_lbl'), fmtElapsed(h.elapsed_s), { ltr: true })}${pend ? '' : kv(t('approx_lbl'), fmtEst(h))}</span></div>
    <div class="hunt-bar"><i style="inline-size:${pct.toFixed(1)}%"></i></div>
    ${huntCandTable(h)}
  </div>`;
}

/* ---- exit list ---- */
function exitMenu(e) {
  const items = [{ icon: 'inbound', label: `${t('inbounds')} (${(e.inbounds || []).length})`, run: () => go('inbounds', '', { exit: e.id }) }];
  if (e.exit_ip) items.push({ icon: 'copy', label: `${t('copy')} · ${t('exit_ip')}`, run: () => copyText(e.exit_ip) });
  if (e.type === 'direct') return items;
  if (e.type === 'custom') items.push({ icon: 'file', label: t('custom_replace'), run: () => openReplaceModal(e) });
  else items.push('-', { icon: 'swap', label: t('swap'), danger: true, run: () => swapExit(e) });
  items.push('-', { icon: 'trash', label: t('disconnect'), danger: true, run: () => disconnectExit(e) });
  return items;
}
function exitTypeTag(e) {
  const m = { direct: 'mute', custom: 'vio', moo: 'blue' };
  return `<span class="tag tag-${m[e.type] || 'acc'}">${esc(exitTypeLabel(e))}</span>`;
}
function mooLeft(e) {
  return (e.type === 'moo' && e.moo_session_expires) ? Math.max(0, Math.ceil((e.moo_session_expires - Date.now() / 1000) / 60)) : null;
}
function exitRowHtml(e, i) {
  const searching = e.status === 'searching';
  const sel = e.type === 'direct' ? '' : `<input type="checkbox" class="ck" data-sel="${esc(e.id)}" ${SEL_EXITS.has(e.id) ? 'checked' : ''} aria-label="${esc(t('selected_lbl'))}">`;
  const ml = mooLeft(e);
  const extra = (searching && e.no_nodes) ? `<div class="waitbox">${icon('clock')}${esc(t('no_nodes_wait'))}</div>` : huntHtml(e.hunt);
  const nib = (e.inbounds || []).length;
  return `<tr class="xrow st-${esc(e.status)}" style="--i:${i}" data-exit="${esc(e.id)}">
      <td class="ckc">${sel}</td>
      <td><div class="xname">${exitFlag(e, 'flag-md')}<div><b>${esc(exitName(e))}</b><span class="xsub">${exitTypeTag(e)}${e.remark && e.type !== 'direct' && e.type !== 'custom' ? '' : ''}</span></div></div></td>
      <td>${statusBadge(e.status)}</td>
      <td>${searching ? '<span class="muted">—</span>' : scoreBadge(e.score)}</td>
      <td>${searching ? '—' : code(e.exit_ip || '—')}</td>
      <td class="hide-sm">${e.type === 'direct' ? '<span class="muted">—</span>' : code(e.node_ip || '—')}</td>
      <td><button type="button" class="linkbtn" data-act="go" data-view="inbounds" data-q='${esc(JSON.stringify({ exit: e.id }))}'>${icon('inbound')}<b dir="ltr">${nib}</b></button>${ml !== null ? `<span class="tag tag-blue" title="${esc(t('moo_session_expires'))}">${icon('clock')}<bdi dir="ltr">${ml}</bdi> ${esc(t('mins'))}</span>` : ''}</td>
      <td class="act">${menuBtn(exitMenu(e))}</td>
    </tr>${extra ? `<tr class="xsubrow"><td></td><td colspan="7">${extra}</td></tr>` : ''}`;
}
function exitCardHtml(e, i) {
  const searching = e.status === 'searching';
  const ml = mooLeft(e);
  const sel = e.type === 'direct' ? '' : `<input type="checkbox" class="ck" data-sel="${esc(e.id)}" ${SEL_EXITS.has(e.id) ? 'checked' : ''} aria-label="${esc(t('selected_lbl'))}">`;
  return `<article class="xcard st-${esc(e.status)}" style="--i:${i}" data-exit="${esc(e.id)}">
    <header>${sel}${exitFlag(e, 'flag-lg')}<div class="xcard-t"><b>${esc(exitName(e))}</b>${exitTypeTag(e)}</div>${menuBtn(exitMenu(e))}</header>
    <div class="xcard-s">${statusBadge(e.status)}${searching ? '' : scoreBadge(e.score)}</div>
    ${searching ? '' : `<div class="kvs">${kv(t('exit_ip'), e.exit_ip || '—', { ltr: true })}${e.type === 'direct' ? '' : kv(t('node'), e.node_ip || '—', { ltr: true })}${kv(t('inbound_port'), e.inbound_port, { ltr: true })}${ml !== null ? kv(t('moo_session_expires'), `${ml} ${t('mins')}`) : ''}</div>`}
    ${(searching && e.no_nodes) ? `<div class="waitbox">${icon('clock')}${esc(t('no_nodes_wait'))}</div>` : huntHtml(e.hunt)}
    <footer><button type="button" class="linkbtn" data-act="go" data-view="inbounds" data-q='${esc(JSON.stringify({ exit: e.id }))}'>${icon('inbound')}${esc(t('inbounds'))}<b dir="ltr">${(e.inbounds || []).length}</b></button></footer>
  </article>`;
}
function exitFiltered() {
  const q = EX.filter.q.trim().toLowerCase();
  return LAST_EXITS.filter((e) => {
    if (EX.filter.st !== 'all' && e.status !== EX.filter.st) return false;
    if (!q) return true;
    return `${exitName(e)} ${e.country || ''} ${e.country_name || ''} ${e.exit_ip || ''} ${e.node_ip || ''} ${exitTypeLabel(e)}`.toLowerCase().includes(q);
  });
}
function paintExitList(stagger) {
  const list = document.getElementById('exitList');
  if (!list) return;
  const rows = exitFiltered();
  const cnt = document.getElementById('exCount'); if (cnt) cnt.textContent = rows.length === LAST_EXITS.length ? LAST_EXITS.length : `${rows.length}/${LAST_EXITS.length}`;
  const chips = document.getElementById('exStChips');
  if (chips) {
    const sts = ['all', 'up', 'searching', 'connecting', 'dirty', 'down'].filter((s) => s === 'all' || LAST_EXITS.some((e) => e.status === s));
    chips.innerHTML = sts.map((s) => `<button type="button" class="chipf ${EX.filter.st === s ? 'on' : ''}" data-act="exSt" data-s="${s}">${s === 'all' ? '' : `<i class="dot dot-${(STATUS_TONE[s] || ['mute'])[0]}"></i>`}${esc(s === 'all' ? t('all') : t(STATUS_TONE[s][1]))}<b dir="ltr">${s === 'all' ? LAST_EXITS.length : LAST_EXITS.filter((e) => e.status === s).length}</b></button>`).join('');
  }
  withScroll(() => {
    if (!LAST_EXITS.length) { list.innerHTML = emptyState(t('no_exits_new'), 'exit'); return; }
    if (!rows.length) { list.innerHTML = emptyState(t('no_match'), 'search'); return; }
    list.innerHTML = EX.mode === 'cards'
      ? `<div class="xcards ${stagger ? 'stagger' : ''}">${rows.map(exitCardHtml).join('')}</div>`
      : `<div class="tbl-wrap"><table class="tbl tbl-exits ${stagger ? 'stagger' : ''}"><thead><tr><th class="ckc"></th><th>${esc(t('country'))}</th><th>${esc(t('status'))}</th><th>${esc(t('score'))}</th><th>${esc(t('exit_ip'))}</th><th class="hide-sm">${esc(t('node'))}</th><th>${esc(t('inbounds'))}</th><th class="act"></th></tr></thead><tbody>${rows.map(exitRowHtml).join('')}</tbody></table></div>`;
  });
  $$('[data-mode]', document.getElementById('view-exits')).forEach((b) => b.classList.toggle('on', b.dataset.mode === EX.mode));
  renderBulkBarExits();
  focusFromRoute('exit');
}
function focusFromRoute(kind) {
  const id = ROUTE.q && ROUTE.q.focus;
  if (!id) return;
  const row = document.querySelector(`[data-${kind}="${CSS.escape(id)}"]`);
  if (!row) return;
  ROUTE.q.focus = null;
  setTimeout(() => { row.scrollIntoView({ behavior: REDUCED_MOTION ? 'auto' : 'smooth', block: 'center' }); row.classList.add('flash'); setTimeout(() => row.classList.remove('flash'), 2200); }, 80);
}
ACT.exSt = (b) => { EX.filter.st = b.dataset.s; paintExitList(false); };
ACT.exMode = (b) => { EX.mode = b.dataset.mode; localStorage.setItem(viewKey('cp_exits_view'), EX.mode); paintExitList(true); };

async function refreshExitLists() {
  let ex;
  try { ex = await api('GET', 'exits'); } catch (e) { return; }
  PROTOCOLS = ex.protocols || [];
  LAST_EXITS = ex.exits || [];
  LAST_EXIT_SNAP = exitSnap(LAST_EXITS);
  paintExitList(false);
  updateBulkBar();
  if (curView === 'inbounds') refreshInbounds(true);
}

/* ---- bulk select + delete ---- */
document.addEventListener('change', (e) => {
  const cb = e.target.closest && e.target.closest('[data-sel]');
  if (!cb) return;
  if (cb.checked) SEL_EXITS.add(cb.dataset.sel); else SEL_EXITS.delete(cb.dataset.sel);
  $$(`[data-sel="${CSS.escape(cb.dataset.sel)}"]`).forEach((o) => { o.checked = cb.checked; });
  updateBulkBar(); renderBulkBarExits();
});
function renderBulkBarExits() {
  const all = document.getElementById('selAllExits');
  if (!all) return;
  const selectable = (LAST_EXITS || []).filter((e) => e.type !== 'direct');
  all.checked = selectable.length > 0 && selectable.every((e) => SEL_EXITS.has(e.id));
  all.indeterminate = !all.checked && selectable.some((e) => SEL_EXITS.has(e.id));
}
function updateBulkBar() {
  let bar = document.getElementById('bulkBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'bulkBar'; bar.className = 'bulkbar';
    document.body.appendChild(bar);
  }
  const n = SEL_EXITS.size;
  bar.classList.toggle('in', n > 0);
  bar.innerHTML = n ? `<span class="bulk-n"><b dir="ltr">${n}</b> ${esc(t('selected_lbl'))}</span>
    ${btn(t('clear_selection'), { kind: 'ghost', sm: true, act: 'bulkClear' })}${btn(t('delete_selected'), { kind: 'danger', sm: true, icon: 'trash', act: 'bulkDel' })}` : '';
}
ACT.bulkClear = () => { SEL_EXITS.clear(); $$('[data-sel]').forEach((c) => { c.checked = false; }); updateBulkBar(); renderBulkBarExits(); };
ACT.bulkDel = () => bulkDeleteSelected();
async function bulkDeleteSelected() {
  const ids = [...SEL_EXITS];
  if (!ids.length) return;
  let ex;
  try { ex = await api('GET', 'exits'); } catch (e) { toast(e.message, true); return; }
  const sel = (ex.exits || []).filter((e) => ids.includes(e.id));
  if (!sel.length) { SEL_EXITS.clear(); updateBulkBar(); renderBulkBarExits(); return; }
  const hasCleanUp = sel.some((e) => e.status === 'up' && e.score === 0);
  const rows = sel.map((e) => `<div class="cf-row">${exitLabel(e)}<span class="cf-meta">${exitTypeTag(e)}${statusBadge(e.status)}${e.score !== null && e.score !== undefined ? scoreBadge(e.score) : ''}${code(e.exit_ip || '—')}</span></div>`).join('');
  const body = `<div class="cf-list">${rows}</div>
    ${hasCleanUp ? `<div class="warnbox">${icon('alert')}<span>${esc(t('bulk_del_warn'))}</span></div>` : ''}
    <p class="muted">${esc(t('bulk_del_note'))}</p>`;
  if (!(await confirmModal({ title: t('bulk_del_title'), bodyHtml: body, okText: t('del'), danger: true }))) return;
  for (const e of sel) {
    try { await api('POST', 'disconnect', { exit_id: e.id }); SEL_EXITS.delete(e.id); }
    catch (err) { toast(err.message, true); }
    await sleep(300);
  }
  updateBulkBar(); renderBulkBarExits();
  toast(sel.length > 1 ? t('exits_deleted') : t('exit_deleted'));
  refreshExitLists();
}
async function swapExit(e) {
  const body = `<div class="cf-row">${exitLabel(e)}<span class="cf-meta">${statusBadge(e.status)}${code(e.exit_ip || '—')}</span></div><p class="muted">${esc(t('swap_confirm'))}</p>`;
  if (!(await confirmModal({ title: t('swap'), bodyHtml: body, okText: t('swap'), danger: true }))) return;
  try { await api('POST', 'swap', { exit_id: e.id }); toast(t('hunting')); }
  catch (err) { toast(err.message, true); }
  setTimeout(() => { if (curView === 'exits' || curView === 'overview') refreshExitLists(); }, 1200);
}
async function disconnectExit(e) {
  const body = `<div class="cf-row">${exitLabel(e)}<span class="cf-meta">${exitTypeTag(e)}${statusBadge(e.status)}${code(e.exit_ip || '—')}</span></div>
    ${e.status === 'up' && e.score === 0 ? `<div class="warnbox">${icon('alert')}<span>${esc(t('bulk_del_warn'))}</span></div>` : ''}
    <p class="muted">${esc(t('confirm_disconnect'))} ${esc(t('bulk_del_note'))}</p>`;
  if (!(await confirmModal({ title: t('disconnect'), bodyHtml: body, okText: t('del'), danger: true }))) return;
  try { await api('POST', 'disconnect', { exit_id: e.id }); SEL_EXITS.delete(e.id); toast(t('exit_deleted')); refreshExitLists(); updateBulkBar(); }
  catch (err) { toast(err.message, true); }
}

/* ---- custom exits (create / replace config) ---- */
function customFieldsHtml(p) {
  return `${field(t('custom_src'), `<div class="seg seg-sm" role="tablist"><button type="button" class="on" data-src="ovpn" data-p="${p}">${icon('file')}${esc(t('custom_src_ovpn'))}</button><button type="button" data-src="vpngate" data-p="${p}">${icon('globe')}${esc(t('custom_src_vpngate'))}</button></div><input type="hidden" id="${p}Src" value="ovpn">`)}
    <div id="${p}OvpnBox">${field(t('custom_ovpn_hint'), `<textarea id="${p}Ovpn" rows="5" dir="ltr" placeholder="client&#10;dev tun&#10;remote …" spellcheck="false"></textarea><div class="file-row">${fileBtn(p + 'File', '.ovpn,text/plain', t('choose_ovpn'))}</div>`)}</div>
    <div id="${p}NodeBox" hidden>${field(t('custom_src_vpngate'), `<input id="${p}Node" dir="ltr" placeholder="${esc(t('custom_node_ph'))}">`)}</div>`;
}
function bindCustomFields(root, p) {
  $$(`[data-src][data-p="${p}"]`, root).forEach((b) => b.addEventListener('click', () => {
    $$(`[data-src][data-p="${p}"]`, root).forEach((x) => x.classList.toggle('on', x === b));
    root.querySelector('#' + p + 'Src').value = b.dataset.src;
    root.querySelector('#' + p + 'OvpnBox').hidden = b.dataset.src !== 'ovpn';
    root.querySelector('#' + p + 'NodeBox').hidden = b.dataset.src !== 'vpngate';
  }));
  const file = root.querySelector('#' + p + 'File');
  if (file) file.addEventListener('change', () => {
    const f = file.files && file.files[0];
    if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { root.querySelector('#' + p + 'Ovpn').value = String(rd.result || ''); };
    rd.readAsText(f);
  });
}
function customPayload(root, p) {
  const src = root.querySelector('#' + p + 'Src').value;
  if (src === 'vpngate') return { source: 'vpngate', ip: root.querySelector('#' + p + 'Node').value.trim() };
  return { source: 'ovpn', ovpn: root.querySelector('#' + p + 'Ovpn').value };
}
function countryOptions(sel) {
  const codes = [...FLAG_SET].filter((c) => c.length === 2 && !['eu', 'un', 'xk'].includes(c));
  const opts = codes.map((c) => ({ c, n: ccName(c.toUpperCase(), c.toUpperCase()) })).sort((a, b) => a.n.localeCompare(b.n, LANG));
  return `<option value="" data-icon="globe">${esc(t('no_flag'))}</option>` + opts.map((o) => `<option value="${o.c.toUpperCase()}" data-cc="${o.c}" data-sub="${o.c.toUpperCase()}" ${sel && sel.toLowerCase() === o.c ? 'selected' : ''}>${esc(o.n)}</option>`).join('');
}
function openCustomModal() {
  const m = openModal({
    title: t('custom_exit'), sub: t('custom_dirty_note'), icon: 'file', size: 'md',
    body: `<div class="form">
      <div class="grid2">${field(t('custom_label'), `<input id="cxLabel" placeholder="My Home IP">`)}${field(t('custom_flag_country'), `<select id="cxFlag">${countryOptions('')}</select>`)}</div>
      ${customFieldsHtml('cx')}
    </div>`,
    footer: `${btn(t('cancel'), { kind: 'ghost', attrs: 'data-x' })}${btn(t('custom_create'), { kind: 'pri', icon: 'plus', attrs: 'id="cxCreate"' })}`,
  });
  bindCustomFields(m.el, 'cx');
  m.el.querySelector('[data-x]').addEventListener('click', () => m.close());
  const b = m.el.querySelector('#cxCreate');
  b.addEventListener('click', async () => {
    const label = m.el.querySelector('#cxLabel').value.trim();
    if (!label) return toast(t('custom_label'), true);
    b.disabled = true; b.classList.add('loading'); b.querySelector('.btn-l').textContent = t('custom_creating');
    try {
      // backend still stores the flag as an emoji string: convert the picked country
      const payload = Object.assign(customPayload(m.el, 'cx'), { label, flag: ccToEmoji(m.el.querySelector('#cxFlag').value) });
      const r = await api('POST', 'exits/custom', payload);
      toast(r.ok ? t('connected_ok') : (LANG === 'fa' ? r.fa : r.en) || t('err_generic'), !r.ok);
      m.close();
    } catch (err) { toast(err.message, true); b.disabled = false; b.classList.remove('loading'); b.querySelector('.btn-l').textContent = t('custom_create'); }
    setTimeout(() => { if (curView === 'exits') refreshExitLists(); }, 1200);
  });
}
ACT.newCustom = () => openCustomModal();
function openReplaceModal(e) {
  const p = 'cxr' + String(e.id).replace(/\W/g, '');
  const m = openModal({
    title: t('custom_replace'), sub: exitName(e), icon: 'file', size: 'md',
    body: `<div class="form">${customFieldsHtml(p)}</div>`,
    footer: `${btn(t('cancel'), { kind: 'ghost', attrs: 'data-x' })}${btn(t('custom_apply'), { kind: 'pri', icon: 'check', attrs: 'data-go' })}`,
  });
  bindCustomFields(m.el, p);
  m.el.querySelector('[data-x]').addEventListener('click', () => m.close());
  const b = m.el.querySelector('[data-go]');
  b.addEventListener('click', async () => {
    b.disabled = true; b.classList.add('loading'); b.querySelector('.btn-l').textContent = t('custom_creating');
    try {
      const r = await api('POST', `exits/${e.id}/custom-config`, customPayload(m.el, p));
      toast(r.ok ? t('custom_replaced') : (r.fa && LANG === 'fa' ? r.fa : r.en || t('err_generic')), !r.ok);
      m.close();
    } catch (err) { toast(err.message, true); b.disabled = false; b.classList.remove('loading'); b.querySelector('.btn-l').textContent = t('custom_apply'); }
    setTimeout(() => { if (curView === 'exits') refreshExitLists(); }, 1200);
  });
}

/* ---- source: VPN Gate ---- */
let huntPollTimer = null, huntShownJob = null;
function showHuntJob(job, boxId) {
  const box = document.getElementById(boxId || 'huntProg');
  if (!box) return;
  if (!job) { box.innerHTML = ''; return; }
  if (job.status === 'done') {
    box.innerHTML = `<div class="hunt hunt-ok"><div class="hunt-h">${icon('check')}<b>${esc(t('connected_ok'))}</b><span class="hunt-k">${kv(t('exit_ip'), job.result_exit_ip || '', { ltr: true })}${kv(t('score'), job.result_score, { ltr: true })}</span></div></div>`;
    return;
  }
  box.innerHTML = huntHtml(job);
}
async function ensureGateBox() {
  const el = document.getElementById('src-vpngate');
  if (!el || el.dataset.built) return;
  el.dataset.built = '1';
  el.innerHTML = `<div class="src-row">
      ${field(t('country'), `<select id="nodeCountry"><option value="">${esc(t('loading'))}</option></select>`, { cls: 'grow' })}
      <div class="src-go">${btn(t('find_clean'), { kind: 'pri', icon: 'hunt', attrs: 'id="huntBtn"' })}</div>
    </div>
    <div id="huntProg"></div>
    <details class="nodes-d" id="nodesD"><summary>${icon('database')}<span id="nodesT">${esc(t('nodes_of'))}</span><b id="nodesN" dir="ltr"></b></summary><div id="nodeList">${emptyState(t('select_country'), 'globe')}</div></details>`;
  const sel = $('#nodeCountry');
  enhanceSelect(sel);
  try {
    const cs = await api('GET', 'countries');
    sel.innerHTML = cs.countries.map((c) => `<option value="${esc(c.cc)}" data-cc="${esc(c.cc)}" data-label="${esc(ccName(c.cc, c.country))}" data-sub="${esc(`${c.count} ${t('nodes_unit')}${c.is_new ? ' · ' + t('new_badge') : ''}`)}">${esc(ccName(c.cc, c.country))}</option>`).join('') || `<option value="">—</option>`;
    sel.addEventListener('change', () => { loadNodes(sel.value); refreshHuntFor(sel.value); });
    if (cs.countries.length) { sel.value = cs.countries[0].cc; syncDD(sel); loadNodes(sel.value); refreshHuntFor(sel.value); }
  } catch (err) { el.insertAdjacentHTML('beforeend', errorBox(err.message)); }
  $('#huntBtn').addEventListener('click', async () => {
    const cc = sel.value, b = $('#huntBtn');
    if (!cc) return;
    b.disabled = true; b.classList.add('loading');
    try {
      const r = await api('POST', 'hunt', { country: cc });
      toast(t('hunt_started'));
      huntShownJob = r.job.id; showHuntJob(r.job); pollHunt(r.job.id);
    } catch (err) { toast(err.message, true); }
    b.disabled = false; b.classList.remove('loading');
  });
}
async function refreshHuntFor(cc) {
  try {
    const r = await api('GET', 'hunts');
    const job = (r.hunts || []).find((j) => j.provider !== 'moo' && j.country === cc && j.status !== 'done');
    huntShownJob = job ? job.id : null;
    showHuntJob(job);
    if (job) pollHunt(job.id);
  } catch (e) {}
}
function pollHunt(jobId) {
  clearInterval(huntPollTimer);
  huntPollTimer = setInterval(async () => {
    if (curView !== 'exits' || huntShownJob !== jobId) { clearInterval(huntPollTimer); return; }
    try {
      const r = await api('GET', 'hunt/' + jobId);
      showHuntJob(r.job);
      if (r.job.status === 'done') { clearInterval(huntPollTimer); toast(t('connected_ok')); setTimeout(() => refreshExitLists(), 1500); }
    } catch (e) { clearInterval(huntPollTimer); }
  }, 3000);
}
async function loadNodes(cc) {
  const box = $('#nodeList');
  if (!box) return;
  box.innerHTML = `<div class="loading-line"><span class="spin"></span>${esc(t('nodes_loading'))}</div>${skeleton(3, 30)}`;
  try {
    const r = await api('GET', 'nodes?country=' + encodeURIComponent(cc));
    const n = document.getElementById('nodesN'); if (n) n.textContent = r.nodes.length;
    const nt = document.getElementById('nodesT'); if (nt) nt.textContent = `${t('nodes_of')} ${ccName(cc, cc)}`;
    box.innerHTML = r.nodes.length ? `<div class="tbl-wrap"><table class="tbl tbl-mini"><thead><tr><th>${esc(t('node'))}</th><th>${esc(t('ping'))} <small>ms</small></th><th>${esc(t('speed'))} <small>Mbps</small></th><th>${esc(t('sessions'))}</th><th>${esc(t('datacenter'))}</th><th>${esc(t('score'))}</th></tr></thead><tbody>
      ${r.nodes.map((nd) => `<tr><td><span class="nd">${flagImg(nd.cc)}${esc(nd.host || '')}</span>${code(nd.ip)}</td>
        <td class="num" dir="ltr">${nd.ping || '—'}</td><td class="num" dir="ltr">${nd.speed ? Math.round(nd.speed / 100000) / 10 : '—'}</td>
        <td class="num" dir="ltr">${esc(nd.sessions)}</td><td>${nd.datacenter === 'Yes' ? esc(t('yes')) : nd.datacenter === 'No' ? esc(t('no')) : '—'}</td><td>${scoreBadge(nd.score)}</td></tr>`).join('')}
      </tbody></table></div>` : emptyState('—', 'database');
  } catch (err) { box.innerHTML = errorBox(err.message); }
}

/* ---- source: MooProxy ---- */
let mooPollTimer = null, mooShownJob = null;
function updateMooStatus(m) {
  const s = document.getElementById('mooState');
  if (s) s.innerHTML = m.configured ? pill(t('moo_configured'), 'ok', { dot: true }) : pill(t('moo_not_conf'), 'warn', { dot: true });
  const line = document.getElementById('mooUsageLine');
  if (line) {
    const capB = m.cap_mb ? m.cap_mb * 1048576 : 0;
    line.innerHTML = `${kv(t('moo_used'), gb(m.used_bytes || 0), { ltr: true })}${m.cap_mb ? kv(t('moo_cap'), m.cap_mb + ' MB', { ltr: true }) : ''}${capB ? meterBar(((m.used_bytes || 0) / capB) * 100) : ''}`;
  }
}
async function ensureMooBox() {
  const el = document.getElementById('src-moo');
  if (!el || el.dataset.built) return;
  el.dataset.built = '1';
  el.innerHTML = `<div class="moo-top"><span id="mooState"></span><span class="moo-use" id="mooUsageLine"></span></div>
    <div class="src-row">
      ${field(t('country'), `<select id="mooCountry"><option value="">${esc(t('loading'))}</option></select>`, { cls: 'grow' })}
      <div class="src-go">${btn(t('moo_find_clean'), { kind: 'pri', icon: 'hunt', attrs: 'id="mooHuntBtn"' })}</div>
    </div>
    <div id="mooHuntProg"></div>
    <div class="note">${icon('info')}<span>${esc(t('moo_note'))}</span></div>`;
  const sel = $('#mooCountry');
  enhanceSelect(sel);
  try {
    const [cs, st] = await Promise.all([api('GET', 'moo/countries'), api('GET', 'moo/status')]);
    sel.innerHTML = cs.countries.map((c) => `<option value="${esc(c.cc)}" data-cc="${esc(c.cc)}" data-label="${esc(ccName(c.cc, c.name))}" data-sub="${esc(c.clean ? c.clean + ' ' + t('moo_clean') : c.cc)}">${esc(ccName(c.cc, c.name))}</option>`).join('');
    updateMooStatus(st.moo);
    sel.addEventListener('change', () => refreshMooHuntFor(sel.value));
    if (cs.countries.length) { sel.value = cs.countries[0].cc; syncDD(sel); refreshMooHuntFor(sel.value); }
  } catch (err) { el.innerHTML = errorBox(err.message); return; }
  $('#mooHuntBtn').addEventListener('click', async () => {
    const cc = sel.value, b = $('#mooHuntBtn');
    b.disabled = true; b.classList.add('loading');
    try {
      const r = await api('POST', 'moo/hunt', { country: cc });
      toast(t('moo_hunt_started'));
      mooShownJob = r.job.id; showHuntJob(r.job, 'mooHuntProg'); pollMooHunt(r.job.id);
    } catch (err) { toast(err.message, true); }
    b.disabled = false; b.classList.remove('loading');
  });
}
async function refreshMooHuntFor(cc) {
  try {
    const r = await api('GET', 'hunts');
    const job = (r.hunts || []).find((j) => j.provider === 'moo' && j.country === cc && j.status !== 'done');
    mooShownJob = job ? job.id : null;
    showHuntJob(job, 'mooHuntProg');
    if (job) pollMooHunt(job.id);
  } catch (e) {}
}
function pollMooHunt(jobId) {
  clearInterval(mooPollTimer);
  mooPollTimer = setInterval(async () => {
    if (curView !== 'exits' || mooShownJob !== jobId) { clearInterval(mooPollTimer); return; }
    try {
      const r = await api('GET', 'hunt/' + jobId);
      showHuntJob(r.job, 'mooHuntProg');
      if (r.job.status === 'done') { clearInterval(mooPollTimer); toast(t('connected_ok')); setTimeout(() => refreshExitLists(), 1500); }
    } catch (e) { clearInterval(mooPollTimer); }
  }, 3000);
}
function setSrc(src) {
  EX.src = src;
  $$('[data-srctab]').forEach((b) => { b.classList.toggle('on', b.dataset.srctab === src); b.setAttribute('aria-selected', b.dataset.srctab === src); });
  ['vpngate', 'moo', 'custom'].forEach((s) => { const p = document.getElementById('src-' + s); if (p) p.hidden = s !== src; });
  if (src === 'vpngate') ensureGateBox();
  if (src === 'moo') ensureMooBox();
}
ACT.src = (b) => setSrc(b.dataset.srctab);

async function renderExits() {
  const el = $('#view-exits');
  if (!el.dataset.built) {
    el.dataset.built = '1';
    LAST_EXIT_SNAP = null; EX.first = true;
    el.innerHTML = `
      ${panel({ id: 'src', title: t('exit_sources'), ic: 'hunt', collapsible: true,
        actions: `<div class="seg" role="tablist">
          <button type="button" data-act="src" data-srctab="vpngate" role="tab">${icon('globe')}<span>VPN Gate</span></button>
          <button type="button" data-act="src" data-srctab="moo" role="tab">${icon('bolt')}<span>MooProxy</span></button>
          <button type="button" data-act="src" data-srctab="custom" role="tab">${icon('file')}<span>${esc(t('custom_badge'))}</span></button></div>`,
        body: `<div id="src-vpngate"></div><div id="src-moo" hidden></div>
          <div id="src-custom" hidden><div class="src-custom">${icon('file', 'big-ic')}<div><b>${esc(t('custom_exit'))}</b><p class="muted">${esc(t('custom_dirty_note'))}</p></div>${btn(t('custom_create'), { kind: 'pri', icon: 'plus', act: 'newCustom' })}</div></div>` })}
      ${panel({ id: 'exlist', title: t('exits'), ic: 'exit', count: '…', cls: 'pnl-flush',
        actions: `<div class="seg seg-icon"><button type="button" data-act="exMode" data-mode="table" title="${esc(t('view_table'))}" aria-label="${esc(t('view_table'))}">${icon('rows')}</button><button type="button" data-act="exMode" data-mode="cards" title="${esc(t('view_cards'))}" aria-label="${esc(t('view_cards'))}">${icon('grid')}</button></div>`,
        body: `<div class="toolbar">
            <label class="ck-all"><input type="checkbox" id="selAllExits" class="ck"><span>${esc(t('sel_all_exits'))}</span></label>
            <div class="search">${icon('search')}<input type="search" id="exSearch" data-search placeholder="${esc(t('search_exits'))}" autocomplete="off"></div>
          </div>
          <div class="chipbar" id="exStChips"></div>
          <div id="exitList">${skeleton(4, 40)}</div>` })}`;
    el.querySelector('#pnl-exlist .pnl-n').id = 'exCount';
    $('#exSearch').addEventListener('input', (e) => { EX.filter.q = e.target.value; paintExitList(false); });
    $('#selAllExits').addEventListener('change', (ev) => {
      const selectable = (LAST_EXITS || []).filter((e) => e.type !== 'direct');
      if (ev.target.checked) selectable.forEach((e) => SEL_EXITS.add(e.id)); else selectable.forEach((e) => SEL_EXITS.delete(e.id));
      $$('[data-sel]').forEach((cb) => { cb.checked = SEL_EXITS.has(cb.dataset.sel); });
      updateBulkBar(); renderBulkBarExits();
    });
    setSrc(EX.src);
  }
  if (ROUTE.q && ROUTE.q.src && ROUTE.q.src !== EX.src) { setSrc(ROUTE.q.src); ROUTE.q.src = null; }
  if (isTyping($('#pnl-exlist'))) return;
  try {
    const ex = await api('GET', 'exits');
    PROTOCOLS = ex.protocols || [];
    LAST_EXITS = ex.exits || [];
    const snap = exitSnap(LAST_EXITS);
    if (snap !== LAST_EXIT_SNAP || (ROUTE.q && ROUTE.q.focus)) {
      LAST_EXIT_SNAP = snap;
      paintExitList(EX.first); EX.first = false;
    }
    updateBulkBar();
    if (curView === 'exits') setPoll('exits', renderExits, anyActiveHunt(LAST_EXITS) ? 4000 : 15000);
  } catch (err) { const l = document.getElementById('exitList'); if (l) l.innerHTML = errorBox(err.message); }
}
RENDER.exits = renderExits;
POLL.exits = [renderExits, 15000];
/* =====================================================================
   Users / clients
   ===================================================================== */
const US = { filter: { q: '', st: 'all' }, mode: localStorage.getItem(viewKey('cp_users_view')) || (NARROW() ? 'cards' : 'table'), users: [], exits: [], snap: null, first: true };
const USER_TONE = { active: 'ok', expired: 'bad', exhausted: 'warn', ip_limit: 'warn', disabled: 'mute' };
function userPct(u) { return u.total_gb > 0 ? Math.min(100, (u.used_gb / u.total_gb) * 100) : 0; }
function daysLeft(u) { return u.expiry_ts ? Math.ceil((u.expiry_ts - Date.now() / 1000) / 86400) : null; }
function userExpiryHtml(u) {
  if (!u.expiry_ts) return `<span class="muted">${esc(t('never'))}</span>`;
  const d = daysLeft(u);
  return `<span class="exp ${d <= 0 ? 'exp-bad' : d <= 3 ? 'exp-warn' : ''}"><span>${esc(fmtDate(u.expiry_ts))}</span><small dir="auto">${d > 0 ? `${d} ${esc(t('days'))}` : esc(t('expired'))}</small></span>`;
}
/* v1.0.26 traffic multiplier («ضریب حجم») — admin UI only */
function userMult(u) { const m = Number(u.traffic_multiplier); return Number.isFinite(m) && m > 0 ? m : 1; }
function fmtMult(m) { return '×' + String(Math.round(m * 100) / 100); }
function multBadge(u) { const m = userMult(u); return m === 1 ? '' : `<span class="mult-b" dir="ltr" title="${esc(t('traffic_mult'))}">${fmtMult(m)}</span>`; }
function realUsageText(u) { return `${t('real_usage')}: ${(Number(u.real_gb) || 0).toFixed(2)} GB`; }
function userUsageHtml(u) {
  const quota = u.total_gb > 0;
  const tip = userMult(u) !== 1 || (u.real_gb !== undefined && Math.abs((u.real_gb || 0) - (u.used_gb || 0)) > 0.005) ? ` title="${esc(realUsageText(u) + ' · ' + t('traffic_mult') + ' ' + fmtMult(userMult(u)))}"` : '';
  return `<div class="usage"${tip}>${meterBar(quota ? userPct(u) : 0, quota ? undefined : 'mute')}<span class="usage-v" dir="ltr"><b>${u.used_gb.toFixed(2)}</b> / ${quota ? u.total_gb.toFixed(2) + ' GB' : '∞'}</span></div>`;
}
/* v1.0.27: any positive multiplier the admin types (no ×10 cap).
   Floor 0.01, technical guard 100000 — same as the backend. */
const MULT_MIN = 0.01, MULT_MAX = 100000;
function parseMultInput(v) {
  const s = String(v === undefined || v === null ? '' : v).trim()
    .replace(/[۰-۹]/g, (d) => String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String('٠١٢٣٤٥٦٧٨٩'.indexOf(d)))
    .replace(/[٫،,]/g, '.').replace(/^[×xX]\s*/, '');
  if (!/^(\d+\.?\d*|\.\d+)$/.test(s)) return null;
  let x = Number(s);
  if (!Number.isFinite(x) || x <= 0) return null;
  x = Math.round(x * 100) / 100;
  return x >= MULT_MIN && x <= MULT_MAX ? x : null;
}
function multEditorHtml(id, val) {
  const v = String(Math.round(Number(val) * 100) / 100);
  return `<div class="mult-row"><label class="mult-l" for="${id}">${esc(t('traffic_mult_manual'))}</label><input id="${id}" class="mult-in" type="text" inputmode="decimal" autocomplete="off" spellcheck="false" dir="ltr" placeholder="${esc(t('traffic_mult_manual_ph'))}" aria-label="${esc(t('traffic_mult_manual'))}" value="${esc(v)}">${[1, 1.5, 2, 3].map((x) => `<button type="button" class="chipf" data-qm="${x}" ${x === 1 ? `title="${esc(t('traffic_mult_remove'))}"` : ''}>×${x}</button>`).join('')}<button type="button" class="chipf mult-rm" data-qmrm="1">${esc(t('traffic_mult_remove'))}</button></div><div class="mult-err" data-merr="${id}" role="alert" hidden>${esc(t('traffic_mult_bad'))}</div>`;
}
/* binds chips + inline validation; returns a reader: () => number | null
   (null shows the inline Persian error and focuses the input). */
function bindMultEditor(root, id) {
  const inp = root.querySelector('#' + id), err = root.querySelector(`[data-merr="${id}"]`);
  const show = (bad) => { if (err) err.hidden = !bad; inp.classList.toggle('invalid', !!bad); inp.setAttribute('aria-invalid', bad ? 'true' : 'false'); };
  const set = (x) => { inp.value = String(x); inp.dataset.dirty = '1'; show(false); };
  $$('[data-qm]', root).forEach((b) => b.addEventListener('click', () => set(b.dataset.qm)));
  $$('[data-qmrm]', root).forEach((b) => b.addEventListener('click', () => set(1)));
  inp.addEventListener('input', () => { inp.dataset.dirty = '1'; show(inp.value.trim() !== '' && parseMultInput(inp.value) === null); });
  return () => { const x = parseMultInput(inp.value); if (x === null) { show(true); inp.focus(); } else show(false); return x; };
}
async function userMultSave(u, x) {
  try { await api('POST', 'users/update', { user_id: u.id, traffic_multiplier: x }); toast(x === 1 ? t('traffic_mult_removed') : t('traffic_mult_saved')); refreshUserList(true); return true; } catch (err) { toast(err.message, true); return false; }
}
function openMultModal(u) {
  const m = openModal({
    title: `${t('traffic_mult_manual')} — ${u.name}`, icon: 'edit', size: 'sm',
    body: `<div class="form">${field(t('traffic_mult'), multEditorHtml('mMult', userMult(u)), { hint: t('traffic_mult_hint') + ' — ' + t('traffic_mult_future') })}</div>`,
    footer: `${btn(t('cancel'), { kind: 'ghost', attrs: 'data-x' })}${btn(t('traffic_mult_save'), { kind: 'pri', icon: 'check', attrs: 'data-go' })}`,
  });
  const read = bindMultEditor(m.el, 'mMult');
  m.el.querySelector('[data-x]').addEventListener('click', () => m.close());
  const go_ = m.el.querySelector('[data-go]');
  const save = async () => { const x = read(); if (x === null) { toast(t('traffic_mult_bad'), true); return; } go_.disabled = true; if (await userMultSave(u, x)) m.close(); else go_.disabled = false; };
  go_.addEventListener('click', save);
  m.el.querySelector('#mMult').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); save(); } });
  setTimeout(() => { const i = m.el.querySelector('#mMult'); if (i) { i.focus(); i.select(); } }, 30);
  return m;
}
async function userMultReset(u) {
  try { await api('POST', 'users/update', { user_id: u.id, traffic_multiplier: 1 }); toast(t('traffic_mult_removed')); refreshUserList(true); } catch (err) { toast(err.message, true); }
}
function userIpsHtml(u) {
  const lim = u.limit_ip > 0 ? String(u.limit_ip) : '∞';
  const txt = `<bdi dir="ltr">${u.active_ips || 0}/${lim}</bdi>`;
  const list = u.active_ip_list || [];
  if (!list.length) return `<span class="ips">${icon('globe')}${txt}</span>`;
  return `<details class="ips-d"><summary class="ips">${icon('globe')}${txt}</summary><div class="ips-pop">${list.map((ip) => code(ip)).join('')}</div></details>`;
}
function exitFlagsHtml(u, exits) {
  const list = (u.exit_ids || []).map((id) => exits.find((x) => x.id === id)).filter(Boolean);
  if (!list.length) return '<span class="muted">—</span>';
  const show = list.slice(0, 5);
  return `<span class="fstack" title="${esc(list.map(exitName).join(' · '))}">${show.map((e) => exitFlag(e, 'flag-sm')).join('')}${list.length > 5 ? `<span class="fmore" dir="ltr">+${list.length - 5}</span>` : ''}</span>`;
}
function userMenu(u) {
  return [
    { icon: 'users', label: t('udr_open'), run: () => openUserDrawer(u.id, 'info') },
    { icon: 'sparkle', label: t('sub_studio'), run: () => openUserDrawer(u.id, 'sub') },
    { icon: 'qr', label: t('share_card'), run: () => openShareCard(u) },
    { icon: 'ext', label: t('open_sub'), run: () => window.open(u.sub_url, '_blank', 'noopener') },
    { icon: 'edit', label: t('edit_user'), run: () => openUserModal(u) },
    '-',
    { icon: 'power', label: u.enabled ? t('disable') : t('enable'), run: () => userToggle(u) },
    { icon: 'calendar', label: t('renew30'), run: () => userRenew(u) },
    { icon: 'refresh', label: t('reset_traffic'), danger: true, run: () => userReset(u) },
    { icon: 'edit', label: t('traffic_mult_set'), run: () => openMultModal(u) },
    ...(userMult(u) !== 1 ? [{ icon: 'refresh', label: t('traffic_mult_remove'), run: () => userMultReset(u) }] : []),
    '-',
    { icon: 'trash', label: t('del'), danger: true, run: () => userDelete(u) },
  ];
}
function subBtns(u) {
  return `<span class="act-g">${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', iconOnly: true, act: 'copyv', title: `${t('copy')} · ${t('sub_link')}`, attrs: `data-v="${esc(u.sub_url)}"` })}${btn(t('sub_qr'), { kind: 'ghost', sm: true, icon: 'qr', iconOnly: true, act: 'shareUser', attrs: `data-uid="${esc(u.id)}"` })}${btn(t('sub_studio'), { kind: 'ghost', sm: true, icon: 'sparkle', iconOnly: true, act: 'openUser', attrs: `data-uid="${esc(u.id)}" data-tab="sub"` })}</span>`;
}
ACT.shareUser = (b) => { const u = US.users.find((x) => x.id === b.dataset.uid) || (SUBS.users || []).find((x) => x.id === b.dataset.uid); if (u) openShareCard(u); };
ACT.editUser = (b) => { const u = US.users.find((x) => x.id === b.dataset.uid); if (u) openUserModal(u); };
function userRowHtml(u, i) {
  return `<tr style="--i:${i}" data-user="${esc(u.id)}" class="${u.enabled ? '' : 'dim'}">
    <td><span class="un un-open" data-act="openUser" data-uid="${esc(u.id)}" title="${esc(t('udr_open'))}"><span class="ava ${u.online ? 'ava-on' : ''}">${initials(u.name)}</span><span class="un-t"><b>${esc(u.name)}${multBadge(u)}</b><small>${u.online ? `<i class="live"></i>${esc(t('online'))}` : `${esc(t('last_seen'))} ${esc(relTime(u.last_seen))}`}</small></span></span></td>
    <td>${pill(t(u.status), USER_TONE[u.status] || 'mute', { dot: true })}</td>
    <td>${userUsageHtml(u)}</td>
    <td>${userExpiryHtml(u)}</td>
    <td>${userIpsHtml(u)}</td>
    <td class="hide-sm">${exitFlagsHtml(u, US.exits)}</td>
    <td>${subBtns(u)}</td>
    <td class="act"><span class="act-g">${btn(t('edit_user'), { kind: 'ghost', sm: true, icon: 'edit', iconOnly: true, act: 'editUser', attrs: `data-uid="${esc(u.id)}"` })}${menuBtn(userMenu(u))}</span></td>
  </tr>`;
}
function userCardHtml(u, i) {
  return `<article class="ucard ${u.enabled ? '' : 'dim'}" style="--i:${i}" data-user="${esc(u.id)}">
    <header><span class="ava ${u.online ? 'ava-on' : ''} un-open" data-act="openUser" data-uid="${esc(u.id)}">${initials(u.name)}</span><div class="un-t un-open" data-act="openUser" data-uid="${esc(u.id)}" title="${esc(t('udr_open'))}"><b>${esc(u.name)}${multBadge(u)}</b><small>${u.online ? `<i class="live"></i>${esc(t('online'))}` : `${esc(t('last_seen'))} ${esc(relTime(u.last_seen))}`}</small></div>${pill(t(u.status), USER_TONE[u.status] || 'mute', { dot: true })}${menuBtn(userMenu(u))}</header>
    ${userUsageHtml(u)}
    <div class="kvs">${kv(t('expiry'), userExpiryHtml(u), { raw: true })}${kv(t('active_ips'), userIpsHtml(u), { raw: true })}${kv(t('remaining'), u.remaining_gb === null ? t('unlimited') : u.remaining_gb.toFixed(2) + ' GB')}</div>
    <footer>${exitFlagsHtml(u, US.exits)}<span class="sp"></span>${subBtns(u)}${btn(t('edit_user'), { kind: 'ghost', sm: true, icon: 'edit', iconOnly: true, act: 'editUser', attrs: `data-uid="${esc(u.id)}"` })}</footer>
  </article>`;
}
function usersFiltered() {
  const q = US.filter.q.trim().toLowerCase();
  return US.users.filter((u) => {
    const st = US.filter.st;
    if (st === 'online' && !u.online) return false;
    if (st !== 'all' && st !== 'online' && u.status !== st) return false;
    if (!q) return true;
    return `${u.name} ${u.status} ${(u.active_ip_list || []).join(' ')}`.toLowerCase().includes(q);
  });
}
function paintUsers(stagger) {
  const list = document.getElementById('userList');
  if (!list) return;
  const rows = usersFiltered();
  const cnt = document.getElementById('usCount'); if (cnt) cnt.textContent = rows.length === US.users.length ? US.users.length : `${rows.length}/${US.users.length}`;
  const chips = document.getElementById('usStChips');
  if (chips) {
    const sts = ['all', 'online', 'active', 'expired', 'exhausted', 'ip_limit', 'disabled'].filter((s) => s === 'all' || (s === 'online' ? US.users.some((u) => u.online) : US.users.some((u) => u.status === s)));
    const n = (s) => s === 'all' ? US.users.length : s === 'online' ? US.users.filter((u) => u.online).length : US.users.filter((u) => u.status === s).length;
    chips.innerHTML = sts.map((s) => `<button type="button" class="chipf ${US.filter.st === s ? 'on' : ''}" data-act="usSt" data-s="${s}">${s === 'all' ? '' : `<i class="dot dot-${s === 'online' ? 'ok' : USER_TONE[s] || 'mute'}"></i>`}${esc(s === 'all' ? t('all') : t(s))}<b dir="ltr">${n(s)}</b></button>`).join('');
  }
  withScroll(() => {
    if (!US.users.length) { list.innerHTML = emptyState(t('no_users'), 'users'); return; }
    if (!rows.length) { list.innerHTML = emptyState(t('no_match'), 'search'); return; }
    list.innerHTML = US.mode === 'cards'
      ? `<div class="ucards ${stagger ? 'stagger' : ''}">${rows.map(userCardHtml).join('')}</div>`
      : `<div class="tbl-wrap"><table class="tbl tbl-users ${stagger ? 'stagger' : ''}"><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('status'))}</th><th>${esc(t('used'))}</th><th>${esc(t('expiry'))}</th><th>${esc(t('ip_limit'))}</th><th class="hide-sm">${esc(t('exits'))}</th><th>${esc(t('nav_subs'))}</th><th class="act"></th></tr></thead><tbody>${rows.map(userRowHtml).join('')}</tbody></table></div>`;
  });
  $$('[data-umode]', document.getElementById('view-users')).forEach((b) => b.classList.toggle('on', b.dataset.umode === US.mode));
  focusFromRoute('user');
}
ACT.usSt = (b) => { US.filter.st = b.dataset.s; paintUsers(false); };
ACT.usMode = (b) => { US.mode = b.dataset.umode; localStorage.setItem(viewKey('cp_users_view'), US.mode); paintUsers(true); };

async function userToggle(u) {
  try { await api('POST', 'users/toggle', { user_id: u.id }); toast(t('saved')); refreshUserList(true); } catch (err) { toast(err.message, true); }
}
async function userRenew(u) {
  const base = Math.max(Math.floor(Date.now() / 1000), u.expiry_ts || 0);
  try { await api('POST', 'users/update', { user_id: u.id, expiry_ts: base + 30 * 86400 }); toast(t('saved')); refreshUserList(true); } catch (err) { toast(err.message, true); }
}
async function userReset(u) {
  const body = `<div class="cf-item"><span class="ava">${initials(u.name)}</span><b>${esc(u.name)}</b>${kv(t('used'), u.used_gb.toFixed(2) + ' GB', { ltr: true })}</div><p class="muted">${esc(t('reset_confirm'))}</p>`;
  if (!(await confirmModal({ title: t('reset_traffic'), bodyHtml: body, okText: t('reset_traffic'), danger: true }))) return;
  try { await api('POST', 'users/reset', { user_id: u.id }); toast(t('saved')); refreshUserList(true); } catch (err) { toast(err.message, true); }
}
async function userDelete(u) {
  const body = `<div class="cf-item"><span class="ava">${initials(u.name)}</span><b>${esc(u.name)}</b></div><p class="muted">${esc(t('confirm_delete_user'))}</p>`;
  if (!(await confirmModal({ title: t('del'), bodyHtml: body, okText: t('del'), danger: true }))) return;
  try { await api('POST', 'users/delete', { user_id: u.id }); toast(t('saved')); refreshUserList(true); } catch (err) { toast(err.message, true); }
}

/* ---- exit picker (toggle chips with flags) ---- */
function exitPickHtml(exits, selected) {
  if (!exits.length) return `<span class="muted">${esc(t('no_exits'))}</span>`;
  return `<div class="xpick">${exits.map((e) => `<label class="xpick-i"><input type="checkbox" class="u-exit" value="${esc(e.id)}" ${selected.includes(e.id) ? 'checked' : ''}><span>${exitFlag(e)}<b>${esc(exitName(e))}</b><i class="dot dot-${e.status === 'up' ? 'ok' : e.status === 'searching' ? 'warn' : 'bad'}"></i></span></label>`).join('')}</div>
    <div class="xpick-t">${btn(t('select_all'), { kind: 'ghost', sm: true, attrs: 'data-xall="1"' })}${btn(t('select_none'), { kind: 'ghost', sm: true, attrs: 'data-xall="0"' })}</div>`;
}
function bindExitPick(root) {
  $$('[data-xall]', root).forEach((b) => b.addEventListener('click', () => $$('.u-exit', root).forEach((c) => { c.checked = b.dataset.xall === '1'; })));
}
async function openUserModal(u) {
  let exits = US.exits;
  if (!exits.length) { try { exits = (await api('GET', 'exits')).exits || []; US.exits = exits; } catch (e) {} }
  const edit = !!u;
  const dl = edit && u.expiry_ts ? Math.max(0, Math.ceil((u.expiry_ts - Date.now() / 1000) / 86400)) : (edit ? 0 : 30);
  const m = openModal({
    title: edit ? `${t('edit_user')} — ${u.name}` : t('add_user'), icon: edit ? 'edit' : 'plus', size: 'md',
    body: `<div class="form">
      ${field(t('name'), `<input id="uName" value="${edit ? esc(u.name) : ''}" autocomplete="off">`)}
      <div class="grid3">
        ${field(t('total_gb'), `<input id="uGb" type="number" min="0" step="0.5" dir="ltr" value="${edit ? u.total_gb : 0}">`)}
        ${field(t('expiry_days'), `<input id="uDays" type="number" min="0" dir="ltr" value="${dl}">`)}
        ${field(t('limit_ip'), `<input id="uLimitIp" type="number" min="0" dir="ltr" value="${edit ? (u.limit_ip || 0) : 0}">`)}
      </div>
      ${field(t('traffic_mult'), multEditorHtml('uMult', edit ? userMult(u) : 1), { hint: t('traffic_mult_hint') + (edit ? ' — ' + t('traffic_mult_future') : '') })}
      <div class="quick">${[7, 30, 90].map((d) => `<button type="button" class="chipf" data-qd="${d}">${d} ${esc(t('days'))}</button>`).join('')}${[10, 50, 100].map((g) => `<button type="button" class="chipf" data-qg="${g}">${g} GB</button>`).join('')}</div>
      ${field(t('attach_exits'), exitPickHtml(exits, edit ? (u.exit_ids || []) : []))}
    </div>`,
    footer: `${btn(t('cancel'), { kind: 'ghost', attrs: 'data-x' })}${btn(edit ? t('save') : t('add'), { kind: 'pri', icon: 'check', attrs: 'data-go' })}`,
  });
  bindExitPick(m.el);
  $$('[data-qd]', m.el).forEach((b) => b.addEventListener('click', () => { m.el.querySelector('#uDays').value = b.dataset.qd; }));
  $$('[data-qg]', m.el).forEach((b) => b.addEventListener('click', () => { m.el.querySelector('#uGb').value = b.dataset.qg; }));
  const readMult = bindMultEditor(m.el, 'uMult');
  m.el.querySelector('[data-x]').addEventListener('click', () => m.close());
  const go_ = m.el.querySelector('[data-go]');
  go_.addEventListener('click', async () => {
    const exit_ids = $$('.u-exit:checked', m.el).map((c) => c.value);
    const body = {
      name: m.el.querySelector('#uName').value,
      total_gb: parseFloat(m.el.querySelector('#uGb').value || '0'),
      expiry_days: parseInt(m.el.querySelector('#uDays').value || '0'),
      limit_ip: parseInt(m.el.querySelector('#uLimitIp').value || '0'),
      traffic_multiplier: readMult(),
      exit_ids,
    };
    if (body.traffic_multiplier === null) { toast(t('traffic_mult_bad'), true); return; }
    go_.disabled = true; go_.classList.add('loading');
    try {
      if (edit) await api('POST', 'users/update', Object.assign({ user_id: u.id }, body));
      else await api('POST', 'users', body);
      toast(t('saved')); m.close();
      refreshUserList(true);
    } catch (err) { toast(err.message, true); go_.disabled = false; go_.classList.remove('loading'); }
  });
}
ACT.newUser = () => openUserModal();

/* ---- share card: styled QR + PNG export ---- */
function openShareCard(u) {
  const quota = u.total_gb > 0;
  const exits = (u.exit_ids || []).map((id) => (US.exits.length ? US.exits : LAST_EXITS).find((x) => x.id === id)).filter(Boolean);
  const m = openModal({
    title: t('share_card'), icon: 'qr', size: 'sm',
    body: `<div class="share">
      <div class="share-card" id="shareCard">
        <div class="share-top"><span class="brand-mk sm">${brandMark()}</span><span class="share-brand">Clean Exit</span>${pill(t(u.status), USER_TONE[u.status] || 'mute', { dot: true })}</div>
        <div class="share-name">${esc(u.name)}</div>
        <div class="share-qr"><canvas></canvas></div>
        <div class="share-stats">
          <div><span>${esc(t('used'))}</span><b dir="ltr">${u.used_gb.toFixed(2)} GB</b></div>
          <div><span>${esc(t('total_gb').split('(')[0])}</span><b dir="ltr">${quota ? u.total_gb.toFixed(2) + ' GB' : '∞'}</b></div>
          <div><span>${esc(t('expiry'))}</span><b>${u.expiry_ts ? esc(fmtDate(u.expiry_ts)) : esc(t('never'))}</b></div>
        </div>
        ${quota ? meterBar(userPct(u)) : ''}
        <div class="share-flags">${exits.map((e) => exitFlag(e, 'flag-sm')).join('')}</div>
        <div class="share-url" dir="ltr" title="${esc(u.sub_url)}">${esc(u.sub_url.replace(/^https?:\/\//, ''))}</div>
      </div>
    </div>`,
    footer: `${btn(t('download_png'), { kind: 'ghost', icon: 'download', attrs: 'data-png' })}${btn(t('open'), { kind: 'ghost', icon: 'ext', attrs: 'data-open' })}${btn(t('copy'), { kind: 'pri', icon: 'copy', attrs: 'data-cp' })}`,
  });
  drawQr(m.el.querySelector('.share-qr canvas'), u.sub_url);
  m.el.querySelector('[data-cp]').addEventListener('click', (e) => copyText(u.sub_url, e.currentTarget));
  m.el.querySelector('[data-open]').addEventListener('click', () => window.open(u.sub_url, '_blank', 'noopener'));
  m.el.querySelector('[data-png]').addEventListener('click', () => exportSharePng(u, m.el.querySelector('.share-qr canvas')));
}
function exportSharePng(u, qrCv) {
  const W = 720, H = 1000, c = document.createElement('canvas');
  c.width = W; c.height = H;
  const g = c.getContext('2d');
  const dark = effectiveTheme() === 'dark';
  const bg = g.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, dark ? '#10141c' : '#fbfaf6'); bg.addColorStop(1, dark ? '#0a0c10' : '#ece8de');
  g.fillStyle = bg; g.fillRect(0, 0, W, H);
  g.fillStyle = dark ? 'rgba(62,230,168,.10)' : 'rgba(10,143,98,.08)';
  g.beginPath(); g.arc(W * 0.85, 120, 260, 0, Math.PI * 2); g.fill();
  const fg = dark ? '#e8ebf2' : '#16181d', mute = dark ? '#8a93a6' : '#5d6170', acc = dark ? '#3ee6a8' : '#0a8f62';
  const font = getComputedStyle(document.body).fontFamily;
  g.direction = LANG === 'fa' ? 'rtl' : 'ltr';
  g.textAlign = 'center';
  g.fillStyle = acc; g.font = `700 26px ${font}`; g.fillText('CLEAN EXIT', W / 2, 80);
  g.fillStyle = fg; g.font = `700 56px ${font}`; g.fillText(u.name, W / 2, 160);
  const qs = 440, qx = (W - qs) / 2, qy = 210;
  g.fillStyle = '#fff'; roundRect(g, qx - 20, qy - 20, qs + 40, qs + 40, 28); g.fill();
  g.imageSmoothingEnabled = false; g.drawImage(qrCv, qx, qy, qs, qs);
  g.fillStyle = mute; g.font = `400 26px ${font}`;
  const row = (y, k, v) => { g.fillStyle = mute; g.fillText(k, W / 2, y); g.fillStyle = fg; g.font = `700 32px ${font}`; g.fillText(v, W / 2, y + 42); g.font = `400 26px ${font}`; };
  row(750, t('used'), `${u.used_gb.toFixed(2)} / ${u.total_gb > 0 ? u.total_gb.toFixed(2) + ' GB' : '∞'}`);
  row(850, t('expiry'), u.expiry_ts ? fmtDate(u.expiry_ts) : t('never'));
  g.fillStyle = mute; g.font = `400 18px ui-monospace, monospace`; g.direction = 'ltr';
  g.fillText(u.sub_url.replace(/^https?:\/\//, '').slice(0, 64), W / 2, 960);
  c.toBlob((b) => { const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = protoFileName(u.name, '-subscription.png'); document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); });
}
function roundRect(g, x, y, w, h, r) { g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
// legacy name
const showSubQr = openShareCard;

async function refreshUserList(force) {
  const el = $('#view-users');
  const list = document.getElementById('userList');
  if (!el || !list) return;
  if (!force && (isTyping(el) || MODAL_STACK.length || $('#popMenu'))) return;
  let ur, ex;
  try { [ur, ex] = await Promise.all([api('GET', 'users'), api('GET', 'exits')]); }
  catch (err) { if (force) list.innerHTML = errorBox(err.message); return; }
  US.users = ur.users || []; US.exits = ex.exits || []; LAST_EXITS = US.exits;
  if (UDR.uid) udrRepaint(false);
  const snap = JSON.stringify(US.users.map((u) => [u.id, u.name, u.status, u.used_gb, u.online, u.last_seen, (u.exit_ids || []).join(','), u.expiry_ts, u.enabled, u.total_gb, u.limit_ip, u.active_ips, u.traffic_multiplier, u.real_gb]));
  if (!force && snap === US.snap) return;
  US.snap = snap;
  US.users.forEach((u) => noteUserTraffic(u.id, (u.used_gb || 0) * 1073741824));
  paintUsers(US.first); US.first = false;
}
RENDER.users = async function renderUsers() {
  const el = $('#view-users');
  if (!el.dataset.built) {
    el.dataset.built = '1'; US.snap = null; US.first = true;
    el.innerHTML = panel({ id: 'users', title: t('users'), ic: 'users', count: '…', cls: 'pnl-flush',
      actions: `<div class="seg seg-icon"><button type="button" data-act="usMode" data-umode="table" title="${esc(t('view_table'))}" aria-label="${esc(t('view_table'))}">${icon('rows')}</button><button type="button" data-act="usMode" data-umode="cards" title="${esc(t('view_cards'))}" aria-label="${esc(t('view_cards'))}">${icon('grid')}</button></div>${btn(t('add_user'), { kind: 'pri', sm: true, icon: 'plus', act: 'newUser' })}`,
      body: `<div class="toolbar"><div class="search">${icon('search')}<input type="search" id="usSearch" data-search placeholder="${esc(t('search_users'))}" autocomplete="off"></div></div>
        <div class="chipbar" id="usStChips"></div>
        <div id="userList">${skeleton(4, 44)}</div>` });
    el.querySelector('#pnl-users .pnl-n').id = 'usCount';
    $('#usSearch').addEventListener('input', (e) => { US.filter.q = e.target.value; paintUsers(false); });
  }
  await refreshUserList(true);
  // #/users?user=<id>[&tab=sub] (also old #/subs links) opens the drawer
  if (ROUTE.q && ROUTE.q.user) { const id = ROUTE.q.user, tb = ROUTE.q.tab; ROUTE.q.user = null; openUserDrawer(id, tb); }
};
POLL.users = [() => refreshUserList(false), 5000];
/* =====================================================================
   User detail drawer (v1.0.24) — Users + Subscription studio merged.
   The Users list stays as it was; opening a user shows this drawer with
   two tabs: «اطلاعات» (usage / expiry / IPs / exits / QR + the user
   actions) and «ساب» (the Subscription studio, moved here unchanged:
   same markup, same live phone preview, same users/update calls).
   Data comes from the Users view's own GET users + GET exits poll —
   no new API calls. Desktop: side sheet; mobile: full screen.
   ===================================================================== */
const UDR = { uid: null, tab: 'info', snap: null };
function udrUser() { return US.users.find((u) => u.id === UDR.uid) || null; }
function openUserDrawer(uid, tab) {
  if (!US.users.find((u) => u.id === uid)) return;
  UDR.uid = uid; UDR.tab = tab === 'sub' ? 'sub' : 'info'; UDR.snap = null;
  SUBS.dirty = false;
  let ov = document.getElementById('userDrawer');
  if (!ov) {
    ov = document.createElement('div');
    ov.id = 'userDrawer'; ov.className = 'udr-ov';
    document.body.appendChild(ov);
    ov.addEventListener('mousedown', (e) => { if (e.target === ov) closeUserDrawer(); });
    requestAnimationFrame(() => ov.classList.add('in'));
  }
  udrRepaint(true);
}
function closeUserDrawer() {
  const ov = document.getElementById('userDrawer');
  UDR.uid = null; UDR.snap = null; SUBS.dirty = false;
  if (!ov) return;
  ov.id = ''; ov.classList.remove('in');
  setTimeout(() => ov.remove(), 220);
}
ACT.openUser = (b) => openUserDrawer(b.dataset.uid, b.dataset.tab);
ACT.udrClose = () => closeUserDrawer();
ACT.udrTab = (b) => { if (UDR.tab === b.dataset.utab) return; UDR.tab = b.dataset.utab; SUBS.dirty = false; udrRepaint(true); };

function udrInfoHtml(u) {
  const quota = u.total_gb > 0;
  const exits = (u.exit_ids || []).map((id) => US.exits.find((x) => x.id === id)).filter(Boolean);
  const actions = [
    btn(t('edit_user'), { kind: 'soft', sm: true, icon: 'edit', act: 'editUser', attrs: `data-uid="${esc(u.id)}"` }),
    btn(u.enabled ? t('disable') : t('enable'), { kind: 'ghost', sm: true, icon: 'power', attrs: 'data-uact="toggle"' }),
    btn(t('renew30'), { kind: 'ghost', sm: true, icon: 'calendar', attrs: 'data-uact="renew"' }),
    btn(t('reset_traffic'), { kind: 'ghost', sm: true, icon: 'refresh', attrs: 'data-uact="reset"' }),
    btn(t('traffic_mult_set'), { kind: 'ghost', sm: true, icon: 'edit', attrs: 'data-uact="multset"' }),
    userMult(u) !== 1 ? btn(t('traffic_mult_remove'), { kind: 'ghost', sm: true, icon: 'refresh', attrs: 'data-uact="multreset"' }) : '',
    btn(t('del'), { kind: 'ghost', sm: true, icon: 'trash', attrs: 'data-uact="del"' }),
  ].join('');
  return `<div class="studio udr-info">
    <div class="studio-ed"><div class="sed">
      <div class="sed-sec">
        <h3 class="sub-h">${icon('download')}${esc(t('used'))}</h3>
        ${userUsageHtml(u)}
        <div class="kvs udr-kvs">${kv(t('expiry'), userExpiryHtml(u), { raw: true })}${kv(t('active_ips'), userIpsHtml(u), { raw: true })}${kv(t('remaining'), u.remaining_gb === null || u.remaining_gb === undefined ? t('unlimited') : u.remaining_gb.toFixed(2) + ' GB')}${kv(t('limit_ip'), u.limit_ip > 0 ? String(u.limit_ip) : '∞', { ltr: true })}${kv(t('traffic_mult'), fmtMult(userMult(u)), { ltr: true, cls: 'udr-mult' })}${kv(t('real_usage'), (Number(u.real_gb) || 0).toFixed(2) + ' GB', { ltr: true, cls: 'udr-real' })}</div>
        <div class="udr-multed">${multEditorHtml('udrMult', userMult(u))}<div class="udr-multed-a">${btn(t('traffic_mult_save'), { kind: 'soft', sm: true, icon: 'check', attrs: 'data-uact="multsave"' })}<span class="field-hint">${esc(t('traffic_mult_future'))}</span></div></div>
      </div>
      <div class="sed-sec">
        <h3 class="sub-h">${icon('exit')}${esc(t('exits'))}</h3>
        ${exits.length ? `<div class="udr-exits">${exits.map((e) => `<span class="udr-x">${exitFlag(e, 'flag-sm')}<b>${esc(exitName(e))}</b>${statusBadge(e.status)}</span>`).join('')}</div>` : `<span class="muted">—</span>`}
      </div>
      <div class="sed-sec">
        <h3 class="sub-h">${icon('link')}${esc(t('sub_link'))}</h3>
        <div class="linkbox"><span class="linkbox-u" dir="ltr" title="${esc(u.sub_url)}">${esc(u.sub_url)}</span>
          ${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', act: 'copyv', attrs: `data-v="${esc(u.sub_url)}"` })}
          ${btn(t('share_card'), { kind: 'ghost', sm: true, icon: 'qr', act: 'shareUser', attrs: `data-uid="${esc(u.id)}"` })}
          <a class="btn btn-ghost btn-sm" href="${esc(u.sub_url)}" target="_blank" rel="noopener">${icon('ext')}<span class="btn-l">${esc(t('sub_open_page'))}</span></a></div>
      </div>
      <div class="sed-sec">
        <div class="sed-a udr-acts">${actions}</div>
      </div>
    </div></div>
    <div class="studio-pv"><div class="pv-h">${icon('qr')}${esc(t('sub_qr'))}</div>
      <div class="udr-qr"><canvas></canvas><small dir="ltr">${esc(quota ? `${u.used_gb.toFixed(2)} / ${u.total_gb.toFixed(2)} GB` : `${u.used_gb.toFixed(2)} GB / ∞`)}</small></div>
    </div>
  </div>`;
}

function udrRepaint(force) {
  const ov = document.getElementById('userDrawer');
  if (!ov) return;
  const u = udrUser();
  if (!u) { closeUserDrawer(); return; }
  SUBS.users = US.users; SUBS.exits = US.exits; SUBS.sel = u.id;
  const snap = JSON.stringify([UDR.tab, u, US.exits.map((e) => [e.id, e.status, e.score, e.label, e.country_name])]);
  const mEd = ov.querySelector('#udrMult');
  if (!force && (snap === UDR.snap || SUBS.dirty || isTyping(ov) || MODAL_STACK.length || (mEd && mEd.dataset.dirty === '1' && parseMultInput(mEd.value) !== userMult(udrUser() || {})))) return;
  UDR.snap = snap;
  const oldB = ov.querySelector('.udr-b');
  const keepScroll = oldB && !force ? oldB.scrollTop : 0;
  ov.innerHTML = `<aside class="udr" role="dialog" aria-modal="true" aria-label="${esc(u.name)}">
    <header class="udr-h">
      <span class="ava ${u.online ? 'ava-on' : ''}">${initials(u.name)}</span>
      <div class="un-t"><b>${esc(u.name)}</b><small>${u.online ? `<i class="live"></i>${esc(t('online'))}` : `${esc(t('last_seen'))} ${esc(relTime(u.last_seen))}`}</small></div>
      ${pill(t(u.status), USER_TONE[u.status] || 'mute', { dot: true })}
      <span class="sp"></span>
      <div class="seg udr-tabs" role="tablist">
        <button type="button" role="tab" data-act="udrTab" data-utab="info" class="${UDR.tab === 'info' ? 'on' : ''}" aria-selected="${UDR.tab === 'info'}">${icon('users')}${esc(t('udr_tab_info'))}</button>
        <button type="button" role="tab" data-act="udrTab" data-utab="sub" class="${UDR.tab === 'sub' ? 'on' : ''}" aria-selected="${UDR.tab === 'sub'}">${icon('sparkle')}${esc(t('udr_tab_sub'))}</button>
      </div>
      ${btn(t('close'), { kind: 'ghost', sm: true, icon: 'x', iconOnly: true, act: 'udrClose' })}
    </header>
    <div class="udr-b" id="udrBody"></div>
  </aside>`;
  const body = ov.querySelector('#udrBody');
  if (UDR.tab === 'sub') {
    body.innerHTML = `${panel({ id: 'subss', title: t('sub_studio'), ic: 'sparkle', sub: `<span class="muted">${esc(t('sub_studio_sub'))}</span>`, body: '<div id="subsBody"></div>' })}
      ${panel({ id: 'subsi', title: t('sub_backend'), ic: 'info', collapsible: true, body: backendInfoHtml() })}`;
    paintStudio(body.querySelector('#subsBody'), u);
  } else {
    body.innerHTML = panel({ id: 'udri', title: t('udr_tab_info'), ic: 'users', body: udrInfoHtml(u) });
    const cv = body.querySelector('.udr-qr canvas'); if (cv) drawQr(cv, u.sub_url);
    const readMult = body.querySelector('#udrMult') ? bindMultEditor(body, 'udrMult') : () => null;
    const mi = body.querySelector('#udrMult');
    if (mi) mi.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); const x = readMult(); if (x !== null) userMultSave(u, x); } });
    $$('[data-uact]', body).forEach((b) => b.addEventListener('click', () => {
      const a = b.dataset.uact;
      if (a === 'toggle') userToggle(u); else if (a === 'renew') userRenew(u);
      else if (a === 'reset') userReset(u); else if (a === 'del') userDelete(u);
      else if (a === 'multreset') userMultReset(u);
      else if (a === 'multset') openMultModal(u);
      else if (a === 'multsave') { const x = readMult(); if (x === null) toast(t('traffic_mult_bad'), true); else userMultSave(u, x); }
    }));
  }
  if (keepScroll) body.scrollTop = keepScroll;
}
// Esc closes the drawer only when nothing is layered above it
// (capture phase: runs before the modal/menu Esc handler pops them).
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !document.getElementById('userDrawer')) return;
  if (MODAL_STACK.length || $('#popMenu') || $('.dd-panel') || $('#palette')) return;
  closeUserDrawer();
}, true);
// leaving the Users view closes it
window.addEventListener('hashchange', () => { if (parseHash().view !== 'users') closeUserDrawer(); });
/* =====================================================================
   Subscription studio
   What the backend (v1.0.22) really produces for a subscription:
   - body: base64 list of vless:// links, one per exit attached to the
     user; each link's remark is built by the SERVER as
     "<flag-emoji> <country_name> Score <score>" (direct exit: "🖥️ Server Score <n>")
   - headers: Subscription-Userinfo (upload/download/total/expire, from the
     user's quota + expiry) and profile-update-interval: 24
   - no profile-title header; no stored setting for title/remark format
   - a browser opening the link gets the HTML sub page, styled by the
     panel's static/style.css (so the new theme applies there too)
   Real, persisted controls here use existing endpoints only:
   users/update {user_id, name} and {user_id, exit_ids}.
   ===================================================================== */
const SUBS = { users: [], exits: [], sel: null, snap: null, dirty: false };
function subRemark(e) {
  // mirrors the backend format observed on the live server
  if (e.type === 'direct') return { cc: '', emoji: '🖥️', text: `Server Score ${e.score ?? 3}` };
  if (e.type === 'custom') { const cc = emojiToCc(e.flag); return { cc, emoji: e.flag || '🌐', text: `${e.label || e.remark || 'Custom'} Score ${e.score ?? '?'}` }; }
  return { cc: e.country, emoji: ccToEmoji(e.country), text: `${e.country_name || e.country} Score ${e.score ?? '?'}` };
}
function subHost(u) { try { return new URL(u.sub_url).host; } catch (e) { return ''; } }
function clientPreviewHtml(u) {
  const exits = (u.exit_ids || []).map((id) => SUBS.exits.find((x) => x.id === id)).filter(Boolean);
  const quota = u.total_gb > 0;
  const pct = quota ? userPct(u) : 0;
  const dl = daysLeft(u);
  return `<div class="phone">
    <div class="phone-notch"></div>
    <div class="phone-scr">
      <div class="cl-bar"><span>${icon('menu')}</span><b>${esc(t('sub_client'))}</b><span>${icon('refresh')}</span></div>
      <div class="cl-prof">
        <div class="cl-prof-h"><span class="cl-prof-ic">${icon('link')}</span><div><b dir="ltr">${esc(subHost(u))}</b><small>${esc(t('sub_profile_name_note'))}</small></div></div>
        <div class="cl-use">${meterBar(quota ? pct : 0, quota ? undefined : 'mute')}<div class="cl-use-t"><span dir="ltr">${u.used_gb.toFixed(2)} GB / ${quota ? u.total_gb.toFixed(2) + ' GB' : '∞'}</span><span>${u.expiry_ts ? (dl > 0 ? `${dl} ${esc(t('days'))}` : esc(t('expired'))) : '∞'}</span></div></div>
        <div class="cl-upd">${icon('clock')}<span>${esc(t('sub_update_every'))}</span><b dir="ltr">24h</b></div>
      </div>
      <div class="cl-list ${exits.length ? 'stagger' : ''}">
        ${exits.length ? exits.map((e, i) => {
          const r = subRemark(e);
          const ib = (e.inbounds || []).find((x) => x.default) || (e.inbounds || [])[0];
          return `<div class="cl-cfg ${i === 0 ? 'on' : ''}" style="--i:${i}">
            <span class="cl-cfg-f">${r.cc ? flagImg(r.cc) : `<span class="flag flag-none">${icon(e.type === 'direct' ? 'server' : 'globe')}</span>`}</span>
            <span class="cl-cfg-t"><b dir="ltr">${esc(r.text)}</b><small dir="ltr">${esc(ib ? (ib.label || ib.protocol) : 'VLESS')} · ${esc(ib ? ib.port : e.inbound_port)}</small></span>
            <span class="cl-ping ${e.status === 'up' ? 'ok' : 'bad'}" dir="ltr">${e.status === 'up' ? '●' : '○'}</span>
          </div>`;
        }).join('') : `<div class="cl-empty">${esc(t('sub_no_configs'))}</div>`}
      </div>
    </div>
  </div>`;
}
function subEditorHtml(u) {
  const exits = SUBS.exits;
  return `<div class="sed">
    <div class="sed-sec">
      <h3 class="sub-h">${icon('edit')}${esc(t('sub_title_edit'))}</h3>
      ${field(t('sub_page_title'), `<div class="inline-f"><input id="subName" value="${esc(u.name)}" autocomplete="off">${btn(t('save'), { kind: 'soft', sm: true, icon: 'check', attrs: 'id="subNameSave"' })}</div>`, { hint: t('sub_page_title_hint') })}
    </div>
    <div class="sed-sec">
      <h3 class="sub-h">${icon('exit')}${esc(t('sub_configs_in'))}</h3>
      <div class="sub-x">${exits.map((e) => { const r = subRemark(e); return `<label class="sub-xi"><input type="checkbox" class="sub-exit" value="${esc(e.id)}" ${(u.exit_ids || []).includes(e.id) ? 'checked' : ''}>
        <span>${exitFlag(e)}<span class="sub-xi-t"><b>${esc(exitName(e))}</b><small dir="ltr">${esc(r.text)}</small></span>${statusBadge(e.status)}</span></label>`; }).join('') || `<span class="muted">${esc(t('no_exits'))}</span>`}</div>
      <div class="sed-a">${btn(t('save'), { kind: 'pri', sm: true, icon: 'check', attrs: 'id="subExitsSave"' })}<span class="muted sed-h">${esc(t('sub_exits_hint'))}</span></div>
    </div>
    <div class="sed-sec">
      <h3 class="sub-h">${icon('link')}${esc(t('sub_link'))}</h3>
      <div class="linkbox"><span class="linkbox-u" dir="ltr" title="${esc(u.sub_url)}">${esc(u.sub_url)}</span>
        ${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', act: 'copyv', attrs: `data-v="${esc(u.sub_url)}"` })}
        ${btn(t('share_card'), { kind: 'ghost', sm: true, icon: 'qr', act: 'shareUser', attrs: `data-uid="${esc(u.id)}"` })}
        <a class="btn btn-ghost btn-sm" href="${esc(u.sub_url)}" target="_blank" rel="noopener">${icon('ext')}<span class="btn-l">${esc(t('sub_open_page'))}</span></a></div>
      <div class="hdrs"><div class="hdrs-t">${esc(t('sub_headers'))}</div>
        <code class="mono" dir="ltr">Subscription-Userinfo: upload=… download=… total=${u.total_gb > 0 ? Math.round(u.total_gb * 1073741824) : 0}; expire=${u.expiry_ts || 0}</code>
        <code class="mono" dir="ltr">profile-update-interval: 24</code></div>
    </div>
  </div>`;
}
function backendInfoHtml() {
  const rows = [
    ['check', t('sub_cap_name')], ['check', t('sub_cap_exits')], ['check', t('sub_cap_userinfo')], ['check', t('sub_cap_page')],
    ['lock', t('sub_ro_remark')], ['lock', t('sub_ro_title')], ['lock', t('sub_ro_interval')],
  ];
  return `<ul class="caps">${rows.map(([ic, l]) => `<li class="${ic === 'lock' ? 'ro' : 'ok'}">${icon(ic)}<span>${esc(l)}</span></li>`).join('')}</ul>`;
}
// v1.0.24: the studio moved into the Users view — the «ساب» tab of the
// user drawer (62-userdrawer.js). Markup, live preview and the two
// users/update calls are exactly the v1.0.23 studio's; only the host
// changed (no separate «اشتراک» page / user list any more).
function paintStudio(host, u) {
  if (!host || !u) return;
  host.innerHTML = `<div class="studio"><div class="studio-ed">${subEditorHtml(u)}</div><div class="studio-pv"><div class="pv-h">${icon('eye')}${esc(t('sub_preview'))}</div>${clientPreviewHtml(u)}</div></div>`;
  const after = async () => { SUBS.dirty = false; await refreshUserList(true); udrRepaint(true); };
  host.querySelector('#subNameSave').addEventListener('click', async (ev) => {
    const name = host.querySelector('#subName').value.trim();
    if (!name) return;
    const b = ev.currentTarget; b.disabled = true;
    try { await api('POST', 'users/update', { user_id: u.id, name }); toast(t('saved')); await after(); } catch (err) { toast(err.message, true); }
    b.disabled = false;
  });
  host.querySelector('#subExitsSave').addEventListener('click', async (ev) => {
    const exit_ids = $$('.sub-exit:checked', host).map((c) => c.value);
    const b = ev.currentTarget; b.disabled = true;
    try { await api('POST', 'users/update', { user_id: u.id, exit_ids }); toast(t('saved')); await after(); } catch (err) { toast(err.message, true); }
    b.disabled = false;
  });
  // live preview while editing (not saved until Save)
  host.querySelector('#subName').addEventListener('input', () => { SUBS.dirty = true; });
  $$('.sub-exit', host).forEach((c) => c.addEventListener('change', () => {
    SUBS.dirty = true;
    const ids = $$('.sub-exit:checked', host).map((x) => x.value);
    const pv = host.querySelector('.studio-pv .phone');
    if (pv) pv.outerHTML = clientPreviewHtml(Object.assign({}, u, { exit_ids: ids }));
  }));
}
// legacy entry points (old #/subs links, older hooks)
function refreshSubs(force) { return refreshUserList(force); }
/* =====================================================================
   Settings — grouped sections with sub-nav and a sticky save bar.
   Includes API as a sub-section (Telegram proxy lives under Inbounds).
   ===================================================================== */
const SETTINGS_SECTIONS = [
  { id: 'general', icon: 'sliders', key: 'set_general', form: true },
  { id: 'automation', icon: 'refresh', key: 'set_automation', form: true },
  { id: 'hunting', icon: 'globe', key: 'set_hunting', form: true },
  { id: 'moo', icon: 'bolt', key: 'set_moo', form: true },
  { id: 'notify', icon: 'send', key: 'set_notify', form: true },
  { id: 'announce', icon: 'megaphone', key: 'set_announce', form: true },
  { id: 'appearance', icon: 'palette', key: 'set_appearance', form: true },
  { id: 'api', icon: 'code', key: 'set_api' },
  { id: 'security', icon: 'shield', key: 'set_security' },
  { id: 'backup', icon: 'database', key: 'set_backup' },
  { id: 'update', icon: 'download', key: 'set_update' },
];
let SETTINGS_DIRTY = false;
let SET_SEC = 'general';
function updateSaveBar() {
  const bar = document.getElementById('saveBar');
  if (bar) bar.classList.toggle('in', SETTINGS_DIRTY && curView === 'settings');
  $$('.snav-i').forEach((a) => a.classList.remove('dirty'));
}
function markDirty(e) {
  if (e && e.target && e.target.closest && !e.target.closest('[data-form]')) return;
  if (!SETTINGS_DIRTY) { SETTINGS_DIRTY = true; updateSaveBar(); }
  const sec = e && e.target && e.target.closest && e.target.closest('[data-sec]');
  if (sec) { const a = document.querySelector(`.snav-i[data-sec="${sec.dataset.sec}"]`); if (a) a.classList.add('dirty'); }
}
function setSection(id) {
  if (!SETTINGS_SECTIONS.some((s) => s.id === id)) id = 'general';
  SET_SEC = id;
  $$('#view-settings [data-sec]').forEach((s) => {
    if (s.classList.contains('snav-i')) { s.classList.toggle('on', s.dataset.sec === id); return; }
    const on = s.dataset.sec === id;
    if (on && s.hidden) { s.hidden = false; s.classList.remove('view-in'); void s.offsetWidth; s.classList.add('view-in'); }
    else if (!on) s.hidden = true;
  });
  setPoll('settings', () => {}, 60000);
}
ACT.secNav = (a) => { history.replaceState(null, '', '#/settings/' + a.dataset.sec); ROUTE.sub = a.dataset.sec; setSection(a.dataset.sec); };

/* ---- country pickers ---- */
function countryPickerHtml(rows, selected, prefix, hasNodes) {
  const seen = new Map();
  (rows || []).forEach((r) => { if (r.cc) seen.set(r.cc, { cc: r.cc, name: ccName(r.cc, r.name || r.country || r.cc), has: !!hasNodes(r) }); });
  selected.forEach((cc) => { if (!seen.has(cc)) seen.set(cc, { cc, name: ccName(cc, cc), has: false }); });
  const list = [...seen.values()].sort((a, b) => a.name.localeCompare(b.name, LANG));
  return `<div class="pk-tools"><div class="search sm">${icon('search')}<input type="search" id="${prefix}Search" placeholder="${esc(t('search_countries'))}" autocomplete="off"></div>
      ${btn(t('select_all'), { kind: 'ghost', sm: true, attrs: `data-pickall="${prefix}"` })}${btn(t('select_none'), { kind: 'ghost', sm: true, attrs: `data-picknone="${prefix}"` })}
      <span class="pk-count" id="${prefix}Count" dir="ltr">${selected.size} / ${list.length}</span>
      <span class="pk-legend"><i class="dot dot-ok"></i>${esc(t('has_nodes'))}<i class="dot dot-mute"></i>${esc(t('no_nodes_now'))}</span></div>
    <div class="pk" id="${prefix}List">${list.map((c) => `<label class="pk-i" data-name="${esc((c.name + ' ' + c.cc + ' ' + ccName(c.cc)).toLowerCase())}">
      <input type="checkbox" data-cc="${esc(c.cc)}" ${selected.has(c.cc) ? 'checked' : ''}><span>${flagImg(c.cc)}<b>${esc(c.name)}</b><small dir="ltr">${esc(c.cc)}</small><i class="dot ${c.has ? 'dot-ok' : 'dot-mute'}" title="${esc(c.has ? t('has_nodes') : t('no_nodes_now'))}"></i></span></label>`).join('') || '<span class="muted">—</span>'}</div>`;
}
function bindCountryPicker(prefix, selSet) {
  const box = document.getElementById(prefix + 'Picker');
  if (!box) return;
  const upd = () => { const el = document.getElementById(prefix + 'Count'); if (el) el.textContent = `${selSet.size} / ${box.querySelectorAll('.pk-i').length}`; };
  const s = document.getElementById(prefix + 'Search');
  if (s) s.addEventListener('input', () => { const q = s.value.trim().toLowerCase(); box.querySelectorAll('.pk-i').forEach((r) => { r.hidden = !!q && !(r.dataset.name || '').includes(q); }); });
  box.querySelectorAll('input[data-cc]').forEach((cb) => cb.addEventListener('change', () => { if (cb.checked) selSet.add(cb.dataset.cc); else selSet.delete(cb.dataset.cc); upd(); }));
  box.querySelectorAll('[data-pickall]').forEach((b) => b.addEventListener('click', () => { box.querySelectorAll('.pk-i:not([hidden]) input[data-cc]').forEach((cb) => { cb.checked = true; selSet.add(cb.dataset.cc); }); upd(); markDirty({ target: box }); }));
  box.querySelectorAll('[data-picknone]').forEach((b) => b.addEventListener('click', () => { box.querySelectorAll('.pk-i:not([hidden]) input[data-cc]').forEach((cb) => { cb.checked = false; selSet.delete(cb.dataset.cc); }); upd(); markDirty({ target: box }); }));
}
async function loadCountryPickers() {
  const vgBox = document.getElementById('vgPicker'), mooBox = document.getElementById('mooPicker');
  try { const vg = await api('GET', 'countries'); if (vgBox) vgBox.innerHTML = countryPickerHtml(vg.countries || [], HUNT_SEL.vpngate, 'vg', (c) => (c.count || 0) > 0); }
  catch (e) { if (vgBox) vgBox.innerHTML = errorBox(e.message); }
  try { const moo = await api('GET', 'moo/countries'); if (mooBox) mooBox.innerHTML = countryPickerHtml(moo.countries || [], HUNT_SEL.moo, 'moo', () => true); }
  catch (e) { if (mooBox) mooBox.innerHTML = errorBox(e.message); }
  bindCountryPicker('vg', HUNT_SEL.vpngate);
  bindCountryPicker('moo', HUNT_SEL.moo);
}

/* ---- sections ---- */
function secWrap(id, title, sub, body, o) {
  o = o || {};
  return `<section class="sec" data-sec="${id}" ${o.form ? 'data-form' : ''} hidden>
    <header class="sec-h"><h2>${esc(title)}</h2>${sub ? `<p>${esc(sub)}</p>` : ''}</header>${body}</section>`;
}
function grp(title, body, o) { o = o || {}; return `<div class="grp">${title ? `<div class="grp-t">${o.ic ? icon(o.ic) : ''}${esc(title)}</div>` : ''}<div class="grp-b">${body}</div></div>`; }
function num(id, v, attrs) { return `<input id="${id}" type="number" dir="ltr" value="${esc(v)}" ${attrs || ''}>`; }
function settingsHtml(s, lic) {
  const licHtml = !lic ? '' : lic.master
    ? grp(t('lic_title'), `<p class="muted">${esc(t('lic_note'))}</p>${toggleRow('licToggle', t('lic_all'), lic.all_locked, { cls: 'trow-danger' })}`, { ic: 'lock' })
    : grp(t('lic_status'), `<div class="kvs">${kv(t('status'), lic.locked ? t('lic_on') : t('lic_off'))}${kv(t('lic_checked'), lic.checked_ts ? relTime(lic.checked_ts) : '—')}${lic.reachable === false ? `<span class="muted">${esc(t('lic_unreachable'))}</span>` : ''}</div>`, { ic: 'lock' });
  return [
    secWrap('general', t('set_general'), t('set_general_sub'), grp('', `<div class="grid2">
      ${field(t('target_score'), num('sTarget', s.target_score))}
      ${field(t('check_interval'), num('sInterval', s.check_interval_min, 'min="1"'))}
      ${field(t('max_exits'), num('sMaxExits', s.max_exits ?? 40, 'min="1" max="100"'))}
      ${field(t('online_window'), num('sOnlineWin', s.online_window_min || 3, 'min="1"'))}
      ${field(t('sni'), `<input id="sSni" dir="ltr" value="${esc(s.reality_sni)}">`)}
      ${field(t('host'), `<input id="sHost" dir="ltr" value="${esc(s.panel_host)}">`)}</div>`), { form: true }),
    secWrap('automation', t('set_automation'), t('set_automation_sub'), grp('', `
      ${toggleRow('sAutoSwap', t('auto_swap'), s.auto_swap)}
      ${toggleRow('sAutoAdd', t('auto_add'), s.auto_add_countries)}
      ${toggleRow('sAutoHunt', t('auto_hunt_new'), s.auto_hunt_new_countries)}
      ${toggleRow('sAutoAddAll', t('auto_add_all'), s.auto_add_exit_to_all_users)}
      ${toggleRow('sEnforceIp', t('enforce_ip_limit'), s.enforce_ip_limit)}`) + grp('', `<div class="grid2">
      ${field(t('country_watch'), num('sCountryWatch', s.country_watch_interval_sec || 60, 'min="30" step="30"'))}
      ${field(t('hunt_parallel'), num('sHuntPar', s.hunt_parallel || 16, 'min="1" max="16"'))}
      ${field(t('dirty_skip'), num('sDirtySkip', s.hunt_dirty_skip_min ?? 360, 'min="0" max="10080" step="30"'), { hint: t('dirty_skip_hint') })}</div>`), { form: true }),
    secWrap('hunting', t('set_hunting'), t('hunt_countries_note'),
      grp(t('hunt_vg_title'), `<div id="vgPicker">${skeleton(2, 30)}</div>`, { ic: 'globe' }) +
      grp(t('hunt_moo_title'), `<div id="mooPicker">${skeleton(2, 30)}</div>`, { ic: 'bolt' }), { form: true }),
    secWrap('moo', t('moo_title'), t('moo_note'), grp('', `${toggleRow('sMooEnabled', t('moo_enabled'), s.moo_enabled)}<div class="grid2">
      ${field(t('moo_user'), `<input id="sMooUser" dir="ltr" value="${esc(s.moo_proxy_user || '')}" autocomplete="off">`)}
      ${field(t('moo_pass'), secretField('sMooPass', s.moo_proxy_pass || ''))}
      ${field(t('moo_host'), `<input id="sMooHost" dir="ltr" value="${esc(s.moo_entry_host || 'us.mooproxy.net')}">`)}
      ${field(t('moo_port'), num('sMooPort', s.moo_entry_port || 55688, 'min="1" max="65535"'))}
      ${field(t('moo_sticky'), num('sMooSticky', s.moo_sticky_minutes || 120, 'min="1" max="120"'))}
      ${field(t('moo_parallel'), num('sMooPar', s.moo_hunt_parallel || 4, 'min="1" max="8"'))}
      ${field(t('moo_max_attempts'), num('sMooAttempts', s.moo_hunt_max_attempts || 60, 'min="1" max="200"'))}
      ${field(t('moo_max_mb'), num('sMooMaxMb', s.moo_hunt_max_mb || 5, 'min="0.1" step="0.5"'))}
      ${field(t('moo_traffic_cap'), num('sMooCap', s.moo_traffic_cap_mb ?? 400, 'min="0"'))}</div>`), { form: true }),
    secWrap('notify', t('set_notify'), t('set_notify_sub'), grp('', `<div class="grid2">
      ${field(t('tg_token'), secretField('sTgTok', s.telegram_bot_token))}
      ${field(t('tg_chat'), `<input id="sTgChat" dir="ltr" value="${esc(s.telegram_chat_id)}">`)}</div>
      <div class="row-a">${btn(t('tg_test'), { kind: 'soft', sm: true, icon: 'send', attrs: 'id="sTgTest"' })}</div>`), { form: true }),
    // v1.0.23: global announcement + traffic entry (subscription-only dummy configs)
    secWrap('announce', '📢 ' + t('set_announce'), t('set_announce_sub'), grp('', `
      ${field(t('ann_text'), `<input id="sAnnText" maxlength="200" dir="auto" autocomplete="off" value="${esc(s.announcement || '')}">`, { hint: t('ann_hint') })}
      <div class="note" id="sAnnPreview" ${s.announcement ? '' : 'hidden'}>${icon('megaphone')}<span dir="auto">${esc('📢 ' + (s.announcement || ''))}</span></div>
      ${toggleRow('sAnnShow', t('ann_show'), s.show_announcement_config !== false, { hint: t('ann_show_hint') })}
      ${toggleRow('sTrafficShow', t('ann_traffic_show'), s.show_traffic_config !== false, { hint: t('ann_traffic_hint') })}`, { ic: 'megaphone' }), { form: true }),
    secWrap('appearance', t('set_appearance'), t('set_appearance_sub'),
      grp(t('appearance_local'), `<div class="appear">
        <div class="appear-i"><span>${esc(t('theme'))}</span><div class="seg" id="themeSeg">${['auto', 'dark', 'light'].map((m) => `<button type="button" data-tm="${m}" class="${THEME === m ? 'on' : ''}">${icon(m === 'dark' ? 'moon' : m === 'light' ? 'sun' : 'auto')}<span>${esc(t('theme_' + m))}</span></button>`).join('')}</div></div>
        <div class="appear-i"><span>${esc(t('density'))}</span><div class="seg" id="densSeg">${['compact', 'comfortable'].map((m) => `<button type="button" data-dn="${m}" class="${DENSITY === m ? 'on' : ''}">${icon(m === 'compact' ? 'rows' : 'grid')}<span>${esc(t('density_' + m))}</span></button>`).join('')}</div></div>
      </div><p class="muted small">${esc(t('appearance_local_hint'))}</p>`, { ic: 'palette' }) +
      grp(t('appearance_server'), `<div class="grid2">
        ${field(t('font'), `<select id="sFont">${['vazirmatn', 'shabnam', 'yekan', 'tahoma'].map((f) => `<option value="${f}" ${s.font === f ? 'selected' : ''}>${f}</option>`).join('')}</select>`)}
        ${field(t('language'), `<select id="sLang"><option value="fa" ${s.lang === 'fa' ? 'selected' : ''}>فارسی</option><option value="en" ${s.lang === 'en' ? 'selected' : ''}>English</option></select>`)}</div>`, { ic: 'lang' }), { form: true }),
    secWrap('api', t('set_api'), t('api_help'), `<div id="apiHost"></div>`),
    secWrap('security', t('set_security'), '', grp(t('change_pw'), `<div class="grid2">
      ${field(t('cur_pw'), `<input id="pwCur" type="password" autocomplete="current-password">`)}
      ${field(t('new_pw'), `<input id="pwNew" type="password" autocomplete="new-password">`)}</div>
      <div class="row-a">${btn(t('change_pw'), { kind: 'pri', sm: true, icon: 'key', attrs: 'id="pwBtn"' })}</div>`, { ic: 'key' }) + licHtml),
    secWrap('backup', t('backup'), '', grp('', `<div class="warnbox">${icon('alert')}<span>${esc(t('backup_hint'))}</span></div>
      <div class="row-a"><a class="btn btn-pri" href="${BASE}/api/backup/export">${icon('download')}<span class="btn-l">${esc(t('backup_export'))}</span></a>
      ${btn(t('backup_restore'), { kind: 'danger', icon: 'upload', attrs: 'id="bkRestore"' })}
      <input type="file" id="bkFile" accept=".json,application/json" hidden></div>`)),
    secWrap('update', t('upd_title'), '', grp('', `<div id="updInfo" class="upd-info">${skeleton(1, 24)}</div><div class="grid2">
      ${field(t('upd_gh_owner'), `<input id="uOwner" dir="ltr" value="${esc(s.github_owner || '')}">`)}
      ${field(t('upd_gh_repo'), `<input id="uRepo" dir="ltr" value="${esc(s.github_repo || '')}">`)}
      ${field(t('upd_gh_token'), secretField('uTok', s.github_token || ''))}
      ${field(t('upd_base'), `<input id="uBase" dir="ltr" value="${esc(s.update_base_url || '')}" autocomplete="off">`)}</div>
      <div class="row-a">${btn(t('upd_save_src'), { kind: 'soft', sm: true, icon: 'check', attrs: 'id="uSaveSrc"' })}${btn(t('upd_check'), { kind: 'soft', sm: true, icon: 'refresh', attrs: 'id="uCheck"' })}${btn(t('upd_now'), { kind: 'pri', sm: true, icon: 'download', attrs: 'id="uApply" hidden' })}</div>
      <div id="updResult"></div>`) +
      // v1.0.24: anonymous install counter (saved on toggle, not via the save bar)
      grp(t('telemetry_title'), `${toggleRow('sTelemetry', t('telemetry_on'), s.telemetry_enabled !== false, { hint: t('telemetry_hint') })}`, { ic: 'signal' })),
  ].join('');
}
function settingsPayload() {
  const mooPw = $('#sMooPass').value;
  const payload = {
    target_score: parseInt($('#sTarget').value || '0'),
    check_interval_min: Math.max(1, parseInt($('#sInterval').value || '5')),
    auto_swap: $('#sAutoSwap').checked, auto_add_countries: $('#sAutoAdd').checked,
    auto_hunt_new_countries: $('#sAutoHunt').checked,
    auto_add_exit_to_all_users: $('#sAutoAddAll').checked,
    enforce_ip_limit: $('#sEnforceIp').checked,
    online_window_min: Math.max(1, parseInt($('#sOnlineWin').value || '3')),
    country_watch_interval_sec: Math.max(30, parseInt($('#sCountryWatch').value || '60')),
    hunt_parallel: Math.max(1, Math.min(16, parseInt($('#sHuntPar').value || '16'))),
    max_exits: Math.max(1, Math.min(100, parseInt($('#sMaxExits').value || '40'))),
    font: $('#sFont').value, lang: $('#sLang').value,
    reality_sni: $('#sSni').value.trim(), panel_host: $('#sHost').value.trim(),
    telegram_bot_token: $('#sTgTok').value.trim(), telegram_chat_id: $('#sTgChat').value.trim(),
    moo_enabled: $('#sMooEnabled').checked,
    moo_proxy_user: $('#sMooUser').value.trim(),
    moo_entry_host: $('#sMooHost').value.trim(),
    moo_entry_port: Math.max(1, Math.min(65535, parseInt($('#sMooPort').value || '55688'))),
    moo_sticky_minutes: Math.max(1, Math.min(120, parseInt($('#sMooSticky').value || '120'))),
    moo_hunt_parallel: Math.max(1, Math.min(8, parseInt($('#sMooPar').value || '4'))),
    moo_hunt_max_attempts: Math.max(1, Math.min(200, parseInt($('#sMooAttempts').value || '60'))),
    moo_hunt_max_mb: Math.max(0.1, parseFloat($('#sMooMaxMb').value || '5')),
    moo_traffic_cap_mb: Math.max(0, parseInt($('#sMooCap').value || '400')),
    hunt_countries_vpngate: [...HUNT_SEL.vpngate].sort(),
    hunt_countries_moo: [...HUNT_SEL.moo].sort(),
    announcement: $('#sAnnText').value,
    show_announcement_config: $('#sAnnShow').checked,
    show_traffic_config: $('#sTrafficShow').checked,
    hunt_dirty_skip_min: Math.max(0, Math.min(10080, parseInt($('#sDirtySkip').value || '0') || 0)),
  };
  // mask or blank means "keep the stored one" (backend drops it)
  if (mooPw && mooPw !== '••••••••') payload.moo_proxy_pass = mooPw;
  return payload;
}
function syncSettingsForm(s) {
  const set = (id, v) => { const el = document.getElementById(id); if (el && v !== undefined && v !== null) el.value = v; };
  set('sTarget', s.target_score); set('sInterval', s.check_interval_min);
  set('sOnlineWin', s.online_window_min); set('sCountryWatch', s.country_watch_interval_sec);
  set('sHuntPar', s.hunt_parallel); set('sMaxExits', s.max_exits);
  set('sDirtySkip', s.hunt_dirty_skip_min);
  set('sMooPort', s.moo_entry_port); set('sMooSticky', s.moo_sticky_minutes);
  set('sMooPar', s.moo_hunt_parallel); set('sMooAttempts', s.moo_hunt_max_attempts);
  set('sMooMaxMb', s.moo_hunt_max_mb); set('sMooCap', s.moo_traffic_cap_mb);
  const mp = document.getElementById('sMooPass'); if (mp) mp.value = s.moo_proxy_pass || '';
  set('sAnnText', s.announcement || ''); annPreview();
}
function annPreview() {
  const i = document.getElementById('sAnnText'), p = document.getElementById('sAnnPreview');
  if (!i || !p) return;
  const v = i.value.replace(/[\r\n\t]+/g, ' ').trim();
  p.hidden = !v; p.querySelector('span').textContent = '📢 ' + v;
}
ACT.saveSettings = async (b) => {
  b.disabled = true; b.classList.add('loading');
  try {
    const r = await api('POST', 'settings', settingsPayload());
    SETTINGS = r.settings; applyFont(); toast(t('saved')); syncSettingsForm(r.settings);
    SETTINGS_DIRTY = false; updateSaveBar();
  } catch (err) { toast(err.message, true); }
  b.disabled = false; b.classList.remove('loading');
};
ACT.discardSettings = () => {
  SETTINGS_DIRTY = false; updateSaveBar();
  const el = $('#view-settings'); delete el.dataset.built; el.innerHTML = '';
  RENDER.settings();
};

RENDER.settings = async function renderSettings() {
  const el = $('#view-settings');
  const sec = ROUTE.sub || SET_SEC || 'general';
  if (el.dataset.built) { setSection(sec); return; }
  el.innerHTML = `<div class="set-layout"><nav class="snav">${skeleton(6, 28)}</nav><div class="set-main">${skeleton(3, 120)}</div></div>`;
  const s = (await api('GET', 'settings')).settings;
  SETTINGS = s;
  HUNT_SEL.vpngate = new Set(Array.isArray(s.hunt_countries_vpngate) ? s.hunt_countries_vpngate : []);
  HUNT_SEL.moo = new Set(Array.isArray(s.hunt_countries_moo) ? s.hunt_countries_moo : []);
  let lic = null;
  try { lic = (await api('GET', 'license')).license; } catch (e) {}
  el.dataset.built = '1';
  el.innerHTML = `<div class="set-layout">
    <nav class="snav" aria-label="${esc(t('nav_settings'))}">${SETTINGS_SECTIONS.map((x, i) => `<button type="button" class="snav-i" data-act="secNav" data-sec="${x.id}" style="--i:${i}">${icon(x.icon)}<span>${esc(t(x.key))}</span>${x.form ? '<i class="snav-dot"></i>' : ''}</button>`).join('')}</nav>
    <div class="set-main">${settingsHtml(s, lic)}</div>
  </div>
  <div class="savebar" id="saveBar"><span class="savebar-t"><i class="savebar-dot"></i>${esc(t('unsaved'))}</span>${btn(t('discard'), { kind: 'ghost', sm: true, act: 'discardSettings' })}${btn(t('save'), { kind: 'pri', sm: true, icon: 'check', act: 'saveSettings' })}</div>`;
  enhanceSelects(el);
  el.addEventListener('input', markDirty);
  const annI = document.getElementById('sAnnText'); if (annI) annI.addEventListener('input', annPreview);
  el.addEventListener('change', markDirty);
  // appearance (local, instant — not part of the save bar)
  $$('#themeSeg [data-tm]').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); THEME = b.dataset.tm; localStorage.setItem('cp_theme', THEME); applyTheme(true); $$('#themeSeg [data-tm]').forEach((x) => x.classList.toggle('on', x === b)); }));
  $$('#densSeg [data-dn]').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); DENSITY = b.dataset.dn; localStorage.setItem('cp_density', DENSITY); applyDensity(); $$('#densSeg [data-dn]').forEach((x) => x.classList.toggle('on', x === b)); }));
  const licT = document.getElementById('licToggle');
  if (licT) licT.addEventListener('change', async (e) => {
    e.stopPropagation();
    if (licT.checked && !(await confirmModal({ title: t('lic_all'), bodyHtml: `<p class="muted">${esc(t('lic_note'))}</p>`, okText: t('lic_all'), danger: true }))) { licT.checked = false; return; }
    try { await api('POST', 'license/lock', { locked: licT.checked }); toast(t('saved')); }
    catch (err) { toast(err.message, true); licT.checked = !licT.checked; }
  });
  const telT = document.getElementById('sTelemetry');
  if (telT) telT.addEventListener('change', async (e) => {
    e.stopPropagation();
    try { await api('POST', 'settings', { telemetry_enabled: telT.checked }); if (SETTINGS) SETTINGS.telemetry_enabled = telT.checked; toast(t('saved')); }
    catch (err) { toast(err.message, true); telT.checked = !telT.checked; }
  });
  $('#sTgTest').addEventListener('click', async () => {
    try { await api('POST', 'telegram/test', { telegram_bot_token: $('#sTgTok').value.trim(), telegram_chat_id: $('#sTgChat').value.trim() }); toast(t('tg_test_ok')); }
    catch (err) { toast(err.message, true); }
  });
  $('#pwBtn').addEventListener('click', async () => {
    try { await api('POST', 'auth/password', { current_password: $('#pwCur').value, new_password: $('#pwNew').value }); $('#pwCur').value = ''; $('#pwNew').value = ''; toast(t('pw_changed')); }
    catch (err) { toast(err.message, true); }
  });
  $('#bkRestore').addEventListener('click', () => $('#bkFile').click());
  $('#bkFile').addEventListener('change', async (ev) => {
    ev.stopPropagation();
    const f = ev.target.files[0]; ev.target.value = '';
    if (!f) return;
    if (!(await confirmModal({ title: t('backup_restore'), bodyHtml: `<div class="cf-item">${icon('file')}<b dir="ltr">${esc(f.name)}</b></div><p class="muted">${esc(t('restore_confirm'))}</p>`, okText: t('backup_restore'), danger: true }))) return;
    try { const data = JSON.parse(await f.text()); await api('POST', 'backup/restore', data); toast(t('backup_restarting')); waitForServerThenReload(); }
    catch (err) { toast(err.message, true); }
  });
  loadUpdateInfo();
  $('#uSaveSrc').addEventListener('click', async () => {
    try {
      const r = await api('POST', 'settings', { github_owner: $('#uOwner').value.trim(), github_repo: $('#uRepo').value.trim(), github_token: $('#uTok').value.trim(), update_base_url: $('#uBase').value.trim() });
      SETTINGS = r.settings; toast(t('saved'));
    } catch (err) { toast(err.message, true); }
  });
  $('#uCheck').addEventListener('click', async () => {
    const box = $('#updResult');
    box.innerHTML = `<div class="loading-line"><span class="spin"></span>${esc(t('upd_checking'))}</div>`;
    $('#uApply').hidden = true;
    try {
      const u = (await api('GET', 'update/check')).update || {};
      if (UPDB.cur) { UPDB.info = { ok: true, latest: u.latest || null, update_available: !!u.update_available }; updbCacheSet(UPDB.info); if (!UPDB.state || UPDB.state === 'restart_needed') renderUpdBanner(); }
      if (u.update_available) { box.innerHTML = `<div class="note note-acc">${icon('sparkle')}<span>${esc(t('upd_available'))}</span>${kv(t('upd_current'), u.current, { ltr: true })}${kv(t('upd_latest'), u.latest, { ltr: true })}</div>`; $('#uApply').hidden = false; }
      else box.innerHTML = `<div class="note">${icon('check')}<span>${esc(t('upd_uptodate'))}</span>${kv(t('upd_latest'), u.latest || '—', { ltr: true })}</div>`;
    } catch (err) { box.innerHTML = errorBox(err.message); }
  });
  $('#uApply').addEventListener('click', async () => {
    await doPanelUpdate();   // v1.0.28: same confirm + apply flow, shared with the top banner
  });
  renderApi();
  loadCountryPickers();
  SETTINGS_DIRTY = false; updateSaveBar();
  setSection(sec);
};
async function loadUpdateInfo() {
  const box = $('#updInfo');
  if (!box) return;
  try {
    const st = (await api('GET', 'status')).status || {};
    box.innerHTML = `${kv(t('upd_current'), st.version || '?', { ltr: true })}${st.last_update && st.last_update.ok ? kv(t('upd_last'), `${st.last_update.from} → ${st.last_update.to}`, { ltr: true }) : ''}`;
  } catch (e) { box.innerHTML = ''; }
}

/* ---- API sub-section: main token (masked) + extra tokens + endpoints ---- */
function maskTok(v) { v = String(v || ''); return v.length > 8 ? `${v.slice(0, 4)}••••••••${v.slice(-4)}` : '••••••••'; }
let API_TOK_SHOWN = false;
async function renderApi() {
  const el = document.getElementById('apiHost');
  if (!el) return;
  const s = SETTINGS || (await api('GET', 'settings')).settings;
  const eps = [
    ['GET', '/api/status'], ['GET', '/api/countries'], ['GET', '/api/nodes?country=JP'],
    ['GET', '/api/moo/countries'], ['GET', '/api/moo/status'], ['POST', '/api/moo/hunt'],
    ['GET', '/api/exits'], ['POST', '/api/hunt'], ['GET', '/api/hunt/<id>'],
    ['GET', '/api/hunts'], ['POST', '/api/connect'],
    ['POST', '/api/swap'], ['POST', '/api/disconnect'], ['GET', '/api/users'],
    ['POST', '/api/users'], ['POST', '/api/users/update'],
    ['POST', '/api/users/toggle'], ['POST', '/api/users/reset'],
    ['POST', '/api/users/delete'],
    ['GET', '/api/tokens'], ['POST', '/api/tokens'], ['DELETE', '/api/tokens/<id>'],
    ['GET', '/api/exits/<id>/inbounds'], ['POST', '/api/exits/<id>/inbounds'],
    ['DELETE', '/api/inbounds/<id>'],
    ['GET', '/api/proxy/list'], ['GET', '/api/proxy/egress'], ['POST', '/api/proxy/create'],
    ['POST', '/api/proxy/<id>/start'], ['POST', '/api/proxy/<id>/stop'], ['POST', '/api/proxy/<id>/restart'],
    ['POST', '/api/proxy/<id>/delete'], ['POST', '/api/proxy/<id>/tag'], ['GET', '/api/proxy/<id>/stats'],
    ['GET', '/api/protocols/egress'],
    ['GET', '/api/wg/status'], ['POST', '/api/wg/config'], ['POST', '/api/wg/peer'],
    ['GET', '/api/wg/peer/<user_id>/conf'], ['POST', '/api/wg/peer/<user_id>/toggle'], ['POST', '/api/wg/peer/<user_id>/revoke'],
    ['GET', '/api/ovpn/status'], ['POST', '/api/ovpn/config'],
    ['GET', '/api/ovpn/user/<user_id>/ovpn'], ['POST', '/api/ovpn/user/<user_id>/toggle'], ['POST', '/api/ovpn/user/<user_id>/revoke'],
    ['POST', '/api/exits/custom'], ['POST', '/api/exits/<id>/custom-config'],
    ['POST', '/api/telegram/test'], ['POST', '/api/auth/password'],
    ['GET', '/api/settings'], ['POST', '/api/settings'],
    ['GET', '/api/backup/export'], ['POST', '/api/backup/restore'],
    ['GET', '/api/update/check'], ['POST', '/api/update/apply'],
  ];
  el.innerHTML = grp(t('api_token'), `<div class="tokbox"><code class="mono tok" id="apiTok" dir="ltr">${esc(API_TOK_SHOWN ? s.api_token : maskTok(s.api_token))}</code>
      ${btn(t('proxy_show'), { kind: 'ghost', sm: true, icon: API_TOK_SHOWN ? 'eyeoff' : 'eye', iconOnly: true, attrs: 'id="apiShow"' })}
      ${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', attrs: 'id="apiCopy"' })}
      ${btn(t('regen'), { kind: 'danger', sm: true, icon: 'refresh', attrs: 'id="apiRegen"' })}</div>`, { ic: 'key' }) +
    grp(t('api_tokens'), `<div class="inline-f">${`<input id="tokName" placeholder="${esc(t('token_name'))}" autocomplete="off">`}${btn(t('create_token'), { kind: 'pri', sm: true, icon: 'plus', attrs: 'id="tokCreate"' })}</div>
      <div id="tokOnce" class="note note-acc" hidden>${icon('alert')}<span>${esc(t('token_once'))}</span><code class="mono" id="tokOnceVal" dir="ltr"></code>${btn(t('copy'), { kind: 'soft', sm: true, icon: 'copy', attrs: 'id="tokOnceCopy"' })}</div>
      <div id="tokList">${skeleton(1, 30)}</div>`, { ic: 'key' }) +
    grp(t('endpoints'), `<details class="eps-d"><summary>${esc(t('endpoints'))} <b dir="ltr">${eps.length}</b></summary><div class="eps">${eps.map(([m, p]) => `<div class="ep"><span class="mth mth-${m.toLowerCase()}">${m}</span><code class="mono" dir="ltr">${esc(BASE + p)}</code></div>`).join('')}</div></details>`, { ic: 'code' });
  $('#apiShow').addEventListener('click', () => { API_TOK_SHOWN = !API_TOK_SHOWN; renderApi(); });
  $('#apiCopy').addEventListener('click', (e) => copyText((SETTINGS || s).api_token, e.currentTarget));
  $('#apiRegen').addEventListener('click', async () => {
    if (!(await confirmModal({ title: t('regen'), bodyHtml: `<p class="muted">${esc(t('confirm_regen'))}</p>`, okText: t('regen'), danger: true }))) return;
    try { const r = await api('POST', 'settings', { regen_api_token: true }); SETTINGS = r.settings; renderApi(); toast(t('saved')); }
    catch (err) { toast(err.message, true); }
  });
  $('#tokCreate').addEventListener('click', async () => {
    const name = $('#tokName').value.trim();
    if (!name) return toast(t('token_name'), true);
    try { const r = await api('POST', 'tokens', { name }); $('#tokName').value = ''; $('#tokOnceVal').textContent = r.token.value; $('#tokOnce').hidden = false; loadTokens(); }
    catch (err) { toast(err.message, true); }
  });
  $('#tokOnceCopy').addEventListener('click', (e) => copyText($('#tokOnceVal').textContent, e.currentTarget));
  loadTokens();
}
async function loadTokens() {
  const box = $('#tokList');
  if (!box) return;
  try {
    const r = await api('GET', 'tokens');
    box.innerHTML = `<div class="tbl-wrap"><table class="tbl tbl-mini"><thead><tr><th>${esc(t('name'))}</th><th>${esc(t('created_lbl'))}</th><th>${esc(t('api_token'))}</th><th class="act"></th></tr></thead><tbody>
      ${r.tokens.map((tk) => `<tr><td><b>${esc(tk.name)}</b> ${tk.default ? pill(t('default_token'), 'acc') : ''}</td><td class="muted">${tk.created ? esc(fmtDate(tk.created)) : '—'}</td><td>${code(tk.masked)}</td>
        <td class="act">${tk.default ? '' : btn(t('revoke'), { kind: 'ghost', sm: true, icon: 'trash', iconOnly: true, act: 'revokeTok', attrs: `data-id="${esc(tk.id)}" data-name="${esc(tk.name)}"` })}</td></tr>`).join('')}
      </tbody></table></div>${r.tokens.length <= 1 ? `<p class="muted small">${esc(t('no_tokens'))}</p>` : ''}`;
  } catch (err) { box.innerHTML = errorBox(err.message); }
}
ACT.revokeTok = async (b) => {
  if (!(await confirmModal({ title: t('revoke'), bodyHtml: `<div class="cf-item">${icon('key')}<b>${esc(b.dataset.name)}</b></div><p class="muted">${esc(t('confirm_revoke'))}</p>`, okText: t('revoke'), danger: true }))) return;
  try { await api('DELETE', 'tokens/' + b.dataset.id); loadTokens(); toast(t('saved')); }
  catch (err) { toast(err.message, true); }
};
const renderApiView = renderApi;
/* =====================================================================
   Inbounds › Telegram MTProto proxy (endpoints unchanged)
   ===================================================================== */
const PROXY_SECRET_SHOWN = new Set();
const PROXY_PREV_STATS = new Map();
let LAST_PROXY_SNAP = null;
let PROXY_CACHE = [];
function proxyLink(p) {
  if (p.link) return p.link;
  const host = (SETTINGS && SETTINGS.panel_host) || window.location.hostname;
  return `https://t.me/proxy?server=${encodeURIComponent(host)}&port=${p.port}&secret=${encodeURIComponent(p.secret || '')}`;
}
function proxyEgressLabel(e) {
  if (!e || e.type === 'direct') return `<span class="xl"><span class="flag flag-none">${icon('server')}</span><span class="xl-n">${esc(t('proxy_main_server'))}</span></span>${e && e.ip ? ltr(e.ip) : ''}`;
  return `<span class="xl">${flagImg(e.country)}<span class="xl-n">${esc(ccName(e.country, e.country || ''))}</span></span>${e.ip ? ltr(e.ip) : ''}${e.score !== undefined ? scoreBadge(e.score) : ''}`;
}
function proxyLimitReason(p) {
  const m = { traffic: 'proxy_limit_traffic', expired: 'proxy_limit_expired', users: 'proxy_limit_users', ips: 'proxy_limit_ips' };
  return p.limit_hit && m[p.limit_hit] ? ` — ${t(m[p.limit_hit])}` : '';
}
function proxyStatusBadge(p) {
  if (p.status === 'running') return pill(t('running'), 'ok', { dot: true });
  if (p.status === 'limited') return pill(t('proxy_limited') + proxyLimitReason(p), 'warn', { dot: true });
  return pill(t('stopped'), 'mute', { dot: true });
}
function proxyCardHtml(p, i) {
  const lim = p.limits || {};
  const st = p.stats || null;
  const shown = PROXY_SECRET_SHOWN.has(String(p.id));
  const capBytes = lim.traffic_mb > 0 ? lim.traffic_mb * 1048576 : null;
  const link = proxyLink(p);
  const exp = fmtExpiry(lim.expires_at);
  const stat = (k, v) => `<div class="pst"><span>${esc(k)}</span><b dir="ltr">${v}</b></div>`;
  return `<article class="pcard ${p.status === 'running' ? 'on' : ''}" style="--i:${i}">
    <header><span class="pcard-ic">${icon('tg')}</span><div class="pcard-t"><b>${esc(p.name || ('Proxy ' + p.port))}</b><span class="pcard-tags">${proxyStatusBadge(p)}${p.engine ? `<span class="tag" dir="ltr">${esc(p.engine)}</span>` : ''}${p.adopted ? `<span class="tag">${esc(t('proxy_adopted'))}</span>` : ''}</span></div>
      <span class="act-g">${p.status !== 'running' ? btn(t('proxy_start'), { kind: 'soft', sm: true, icon: 'play', act: 'pxOp', attrs: `data-id="${esc(p.id)}" data-op="start"` }) : btn(t('proxy_stop'), { kind: 'ghost', sm: true, icon: 'stop', act: 'pxOp', attrs: `data-id="${esc(p.id)}" data-op="stop"` })}
      ${menuBtn([{ icon: 'refresh', label: t('proxy_restart'), run: () => proxyOp(p.id, 'restart') }, '-', { icon: 'trash', label: t('proxy_delete'), danger: true, run: () => proxyDelete(p) }])}</span></header>
    <div class="linkbox"><span class="linkbox-u" dir="ltr" title="${esc(link)}">${esc(link)}</span>${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', act: 'copyv', attrs: `data-v="${esc(link)}"` })}</div>
    <div class="linkbox"><span class="linkbox-k">${esc(t('proxy_secret'))}</span><span class="linkbox-u" dir="ltr">${esc(shown ? (p.secret || '') : '••••••••••••')}</span>
      ${btn(shown ? t('proxy_hide') : t('proxy_show'), { kind: 'ghost', sm: true, icon: shown ? 'eyeoff' : 'eye', iconOnly: true, act: 'pxSecret', attrs: `data-id="${esc(p.id)}"` })}${btn(t('copy'), { kind: 'ghost', sm: true, icon: 'copy', iconOnly: true, act: 'copyv', attrs: `data-v="${esc(p.secret || '')}"` })}</div>
    <div class="kvs">${kv(t('proxy_port'), p.port, { ltr: true })}${kv(t('proxy_egress'), proxyEgressLabel(p.egress), { raw: true })}${kv(t('proxy_sponsor').split('(')[0], p.sponsor_tag ? String(p.sponsor_tag).slice(0, 8) + '…' : t('proxy_no_tag'), { ltr: !!p.sponsor_tag })}</div>
    <div class="kvs">${kv(t('proxy_traffic'), `${fmtBytes(p.used_bytes || 0)} / ${capBytes ? fmtBytes(capBytes) : '∞'}`, { ltr: true })}${kv(t('proxy_users'), `${st ? '≈' + (st.users_est ?? '—') : '—'} / ${lim.max_users > 0 ? lim.max_users : '∞'}`, { ltr: true })}${kv(t('proxy_ips'), `${st ? (st.distinct_ips ?? '—') : '—'} / ${lim.max_ips > 0 ? lim.max_ips : '∞'}`, { ltr: true })}${kv(t('proxy_expires'), exp || t('proxy_no_expiry'))}</div>
    ${capBytes ? meterBar(((p.used_bytes || 0) / capBytes) * 100) : ''}
    ${!st ? `<p class="muted small">${esc(t('proxy_stats_na'))}</p>` : `<div class="psts">
      ${stat(t('proxy_conns'), esc(st.conns ?? '—'))}${stat(t('proxy_users_est'), esc(st.users_est ?? '—'))}${stat(t('proxy_distinct_ips'), esc(st.distinct_ips ?? '—'))}
      ${stat(t('proxy_up'), esc(fmtBytes(st.up_bytes || 0)) + (p._upRate ? `<small>${esc(fmtRate(p._upRate))}</small>` : ''))}
      ${stat(t('proxy_down'), esc(fmtBytes(st.down_bytes || 0)) + (p._downRate ? `<small>${esc(fmtRate(p._downRate))}</small>` : ''))}
      ${stat(t('uptime'), esc(fmtDur(st.uptime_s)))}</div>`}
  </article>`;
}
async function proxyOp(id, op) {
  const ok = { start: 'proxy_started', stop: 'proxy_stopped', restart: 'proxy_restarted' }[op];
  try { await api('POST', `proxy/${id}/${op}`); toast(t(ok)); refreshProxyList(true); } catch (err) { toast(err.message, true); }
}
ACT.pxOp = (b) => proxyOp(b.dataset.id, b.dataset.op);
ACT.pxSecret = (b) => { const id = String(b.dataset.id); if (PROXY_SECRET_SHOWN.has(id)) PROXY_SECRET_SHOWN.delete(id); else PROXY_SECRET_SHOWN.add(id); refreshProxyList(true); };
async function proxyDelete(p) {
  const body = `<div class="cf-item">${icon('tg')}<b>${esc(p.name || ('Proxy ' + p.port))}</b>${kv(t('proxy_port'), p.port, { ltr: true })}</div><p class="muted">${esc(t('proxy_confirm_delete'))}</p>`;
  if (!(await confirmModal({ title: t('proxy_delete'), bodyHtml: body, okText: t('del'), danger: true }))) return;
  try { await api('POST', `proxy/${p.id}/delete`); toast(t('proxy_deleted')); refreshProxyList(true); } catch (err) { toast(err.message, true); }
}
async function loadProxyEgress(preserve) {
  const sel = document.getElementById('pxEgress');
  if (!sel) return;
  if (DD_OPEN && DD_OPEN.sel === sel) return;
  const cur = preserve ? sel.value : null;
  try {
    const r = await api('GET', 'proxy/egress');
    const opts = r.options || [];
    sel.innerHTML = opts.map((o) => o.id === 'direct'
      ? `<option value="direct" data-icon="server" data-sub="${esc((o.ip || '—') + ' · ' + t('score') + ' ' + (o.score ?? 3))}">${esc(o.label || t('proxy_main_server'))}</option>`
      : `<option value="${esc(o.id)}" data-cc="${esc(o.country || '')}" data-sub="${esc((o.ip || '—') + ' · ' + t('score') + ' ' + (o.score ?? '?'))}">${esc(ccName(o.country, o.label || o.country || ''))}</option>`).join('') || `<option value="direct">${esc(t('proxy_egress_loading'))}</option>`;
    if (cur && [...sel.options].some((o) => o.value === cur)) sel.value = cur;
    syncDD(sel);
  } catch (err) { if (!sel.options.length) sel.innerHTML = `<option value="direct">${esc(err.message)}</option>`; }
}
function ensureProxyCreate() {
  const el = document.getElementById('proxyCreate');
  if (!el || el.dataset.built) return;
  el.dataset.built = '1';
  el.innerHTML = `<details class="grp grp-d"><summary class="grp-t">${icon('plus')}${esc(t('proxy_create'))}${icon('chev', 'grp-chev')}</summary><div class="grp-b">
    <div class="grid2">
      ${field(t('proxy_name'), `<input id="pxName" autocomplete="off">`)}
      ${field(t('proxy_egress'), `<select id="pxEgress"><option value="direct" data-icon="server">${esc(t('proxy_egress_loading'))}</option></select>`)}
      ${field(t('proxy_fronting'), `<input id="pxFronting" dir="ltr" value="google.com" autocomplete="off">`)}
      ${field(t('proxy_sponsor'), `<input id="pxTag" dir="ltr" autocomplete="off" placeholder="@MTProxybot">`, { hint: t('proxy_sponsor_hint') })}
    </div>
    <div class="grp-t sm">${esc(t('proxy_limits'))}</div>
    <div class="grid4">
      ${field(t('proxy_max_users'), num('pxMaxUsers', 0, 'min="0"'))}
      ${field(t('proxy_traffic_cap'), `<div class="inline-f">${num('pxCapVal', 0, 'min="0"')}<select id="pxCapUnit"><option value="MB">MB</option><option value="GB">GB</option></select></div>`)}
      ${field(t('proxy_max_ips'), num('pxMaxIps', 0, 'min="0"'))}
      ${field(t('proxy_expiry'), `<input id="pxExpiry" type="datetime-local" dir="ltr">`)}
    </div>
    <div class="row-a">${btn(t('proxy_create_btn'), { kind: 'pri', sm: true, icon: 'plus', attrs: 'id="pxCreate"' })}</div></div></details>`;
  enhanceSelects(el);
  loadProxyEgress(false);
  document.getElementById('pxCreate').addEventListener('click', async () => {
    const b = document.getElementById('pxCreate');
    const capVal = parseFloat(document.getElementById('pxCapVal').value || '0');
    const capUnit = document.getElementById('pxCapUnit').value;
    const expVal = document.getElementById('pxExpiry').value;
    const payload = {
      name: document.getElementById('pxName').value.trim(),
      egress: document.getElementById('pxEgress').value,
      sponsor_tag: document.getElementById('pxTag').value.trim(),
      fronting_domain: document.getElementById('pxFronting').value.trim() || 'google.com',
      limits: {
        max_users: Math.max(0, parseInt(document.getElementById('pxMaxUsers').value || '0')),
        traffic_mb: Math.max(0, capVal * (capUnit === 'GB' ? 1024 : 1)),
        expires_at: expVal ? new Date(expVal).toISOString() : null,
        max_ips: Math.max(0, parseInt(document.getElementById('pxMaxIps').value || '0')),
      },
    };
    b.disabled = true; b.classList.add('loading');
    try {
      await api('POST', 'proxy/create', payload);
      toast(t('proxy_created'));
      ['pxName', 'pxTag', 'pxExpiry'].forEach((id) => { document.getElementById(id).value = ''; });
      refreshProxyList(true);
    } catch (err) { toast(err.message, true); }
    b.disabled = false; b.classList.remove('loading');
  });
}
async function refreshProxyList(force) {
  const list = document.getElementById('proxyList');
  if (!list) return;
  if (!force && (isTyping(document.getElementById('proxyCreate')) || $('#popMenu') || MODAL_STACK.length)) return;
  try {
    const r = await api('GET', 'proxy/list');
    const proxies = r.proxies || [];
    const now = Date.now();
    proxies.forEach((p) => {
      const st = p.stats, prev = PROXY_PREV_STATS.get(p.id);
      if (st && prev && now > prev.ts) {
        const dt = (now - prev.ts) / 1000;
        p._upRate = Math.max(0, ((st.up_bytes || 0) - prev.up) / dt);
        p._downRate = Math.max(0, ((st.down_bytes || 0) - prev.down) / dt);
      }
      if (st) PROXY_PREV_STATS.set(p.id, { up: st.up_bytes || 0, down: st.down_bytes || 0, ts: now });
    });
    PROXY_CACHE = proxies;
    const snap = JSON.stringify(proxies.map((p) => [p.id, p.status, p.limit_hit, p.used_bytes, p.stats ? [p.stats.conns, p.stats.users_est, p.stats.distinct_ips, p.stats.up_bytes, p.stats.down_bytes, p.stats.uptime_s] : null]));
    if (!force && snap === LAST_PROXY_SNAP && list.hasChildNodes()) return;
    const first = LAST_PROXY_SNAP === null;
    LAST_PROXY_SNAP = snap;
    withScroll(() => { list.innerHTML = proxies.length ? `<div class="pcards ${first ? 'stagger' : ''}">${proxies.map(proxyCardHtml).join('')}</div>` : emptyState(t('proxy_no_proxies'), 'tg'); });
    loadProxyEgress(true);
  } catch (err) { if (force) list.innerHTML = errorBox(err.message); }
}
async function renderProxy() {
  ensureProxyCreate();
  LAST_PROXY_SNAP = null;
  await refreshProxyList(true);
}
/* =====================================================================
   Logs — hunt activity (read-only, from GET hunts)
   ===================================================================== */
const LG = { hunts: [], snap: null, filter: { q: '', prov: 'all', st: 'all' }, open: new Set(), first: true };
function outcomeCounts(h) {
  const c = { clean: 0, dirty: 0, timeout: 0, other: 0 };
  (h.recent || []).forEach((r) => { if (c[r.outcome] !== undefined) c[r.outcome]++; else c.other++; });
  return c;
}
function outcomeStrip(c) {
  const tot = c.clean + c.dirty + c.timeout + c.other;
  if (!tot) return '<span class="muted">—</span>';
  const seg = (k, tone) => c[k] ? `<i class="os os-${tone}" style="flex:${c[k]}" title="${esc(t({ clean: 'oc_clean', dirty: 'oc_dirty', timeout: 'oc_timeout', other: 'oc_connect' }[k]))}: ${c[k]}"></i>` : '';
  return `<span class="ostrip">${seg('clean', 'ok')}${seg('dirty', 'bad')}${seg('timeout', 'warn')}${seg('other', 'mute')}</span>`;
}
function huntStatusPill(h) {
  if (h.status === 'done') return pill(t('hunt_done'), 'ok', { dot: true });
  if (h.status === 'pending') return pill(t('hunt_pending_s'), 'warn', { dot: true });
  if (h.status === 'running') return pill(t('st_searching'), 'acc', { dot: true });
  return pill(h.status || '?', 'mute', { dot: true });
}
function lastTs(h) { return Math.max(0, ...(h.recent || []).map((r) => r.ts || 0), h.ts || 0, h.started || 0); }
function logsFiltered() {
  const f = LG.filter, q = f.q.trim().toLowerCase();
  return LG.hunts.filter((h) => {
    if (f.prov !== 'all' && (h.provider || 'vpngate') !== f.prov) return false;
    if (f.st !== 'all' && h.status !== f.st) return false;
    if (!q) return true;
    return `${h.country} ${ccName(h.country)} ${h.kind || ''} ${h.provider || ''} ${h.result_exit_ip || ''}`.toLowerCase().includes(q);
  }).sort((a, b) => lastTs(b) - lastTs(a));
}
function logRowHtml(h, i) {
  const c = outcomeCounts(h);
  const open = LG.open.has(h.id);
  return `<tr style="--i:${i}" class="lrow ${open ? 'open' : ''}" data-act="logToggle" data-id="${esc(h.id)}">
    <td>${icon('chevside', 'lchev')}</td>
    <td><span class="xl">${flagImg(h.country)}<span class="xl-n">${esc(ccName(h.country, h.country))}</span></span></td>
    <td><span class="tag ${h.provider === 'moo' ? 'tag-blue' : 'tag-acc'}">${esc(h.provider === 'moo' ? 'MooProxy' : 'VPN Gate')}</span></td>
    <td class="muted">${esc(h.kind || '—')}</td>
    <td>${huntStatusPill(h)}</td>
    <td class="num" dir="ltr">${esc(h.tried_total ?? h.tried ?? 0)}${h.total ? ' / ' + esc(h.total) : ''}</td>
    <td>${outcomeStrip(c)}</td>
    <td>${h.result_exit_ip ? code(h.result_exit_ip) : '<span class="muted">—</span>'}</td>
    <td class="muted">${lastTs(h) ? esc(relTime(lastTs(h))) : '—'}</td>
  </tr>${open ? `<tr class="lsub"><td></td><td colspan="8">${huntCandTable(Object.assign({}, h, { currents: h.status === 'done' ? [] : h.currents })) || `<span class="muted">—</span>`}</td></tr>` : ''}`;
}
ACT.logToggle = (row) => { const id = row.dataset.id; if (LG.open.has(id)) LG.open.delete(id); else LG.open.add(id); paintLogs(false); };
function paintLogs(stagger) {
  const host = document.getElementById('logList');
  if (!host) return;
  const rows = logsFiltered();
  const cnt = document.getElementById('lgCount'); if (cnt) cnt.textContent = rows.length;
  const tot = { clean: 0, dirty: 0, timeout: 0, other: 0 };
  LG.hunts.forEach((h) => { const c = outcomeCounts(h); Object.keys(tot).forEach((k) => { tot[k] += c[k]; }); });
  const sum = document.getElementById('lgSum');
  if (sum) sum.innerHTML = `<span class="cnt cnt-ok"><i></i>${esc(t('oc_clean'))}<b dir="ltr">${tot.clean}</b></span><span class="cnt cnt-bad"><i></i>${esc(t('oc_dirty'))}<b dir="ltr">${tot.dirty}</b></span><span class="cnt cnt-warn"><i></i>${esc(t('oc_timeout'))}<b dir="ltr">${tot.timeout}</b></span><span class="cnt cnt-mute"><i></i>${esc(t('oc_connect'))}<b dir="ltr">${tot.other}</b></span>${outcomeStrip(tot)}`;
  const chips = document.getElementById('lgChips');
  if (chips) {
    const mk = (grp, id, l) => `<button type="button" class="chipf ${LG.filter[grp] === id ? 'on' : ''}" data-act="lgF" data-g="${grp}" data-v="${id}">${esc(l)}</button>`;
    chips.innerHTML = mk('prov', 'all', t('all')) + mk('prov', 'vpngate', 'VPN Gate') + mk('prov', 'moo', 'MooProxy') + '<span class="chip-sep"></span>' +
      mk('st', 'all', t('all')) + mk('st', 'running', t('st_searching')) + mk('st', 'pending', t('hunt_pending_s')) + mk('st', 'done', t('hunt_done'));
  }
  withScroll(() => {
    host.innerHTML = rows.length ? `<div class="tbl-wrap"><table class="tbl tbl-logs ${stagger ? 'stagger' : ''}"><thead><tr><th></th><th>${esc(t('country'))}</th><th>${esc(t('custom_src'))}</th><th>${esc(t('log_kind'))}</th><th>${esc(t('status'))}</th><th>${esc(t('tried_lbl'))}</th><th>${esc(t('log_outcomes'))}</th><th>${esc(t('exit_ip'))}</th><th>${esc(t('last_seen'))}</th></tr></thead><tbody>${rows.map(logRowHtml).join('')}</tbody></table></div>`
      : emptyState(LG.hunts.length ? t('no_match') : t('no_hunts'), 'logs');
  });
}
ACT.lgF = (b) => { LG.filter[b.dataset.g] = b.dataset.v; paintLogs(false); };
async function refreshLogs(force) {
  const el = $('#view-logs');
  if (!el || !el.dataset.built) return;
  if (!force && isTyping(el)) return;
  try {
    const r = await api('GET', 'hunts');
    LG.hunts = r.hunts || [];
    const snap = JSON.stringify(LG.hunts.map((h) => [h.id, h.status, h.tried_total, (h.recent || []).length, (h.currents || []).length]));
    if (!force && snap === LG.snap) return;
    LG.snap = snap;
    paintLogs(LG.first); LG.first = false;
  } catch (err) { const h = document.getElementById('logList'); if (h) h.innerHTML = errorBox(err.message); }
}
RENDER.logs = async function renderLogs() {
  const el = $('#view-logs');
  if (!el.dataset.built) {
    el.dataset.built = '1'; LG.snap = null; LG.first = true;
    el.innerHTML = panel({ id: 'logs', title: t('hunt_log'), ic: 'logs', count: '…', cls: 'pnl-flush', sub: `<span class="muted">${esc(t('hunt_log_sub'))}</span>`,
      body: `<div class="lg-sum" id="lgSum"></div>
        <div class="toolbar"><div class="search">${icon('search')}<input type="search" id="lgSearch" data-search placeholder="${esc(t('search_logs'))}" autocomplete="off"></div></div>
        <div class="chipbar" id="lgChips"></div>
        <div id="logList">${skeleton(5, 34)}</div>` });
    el.querySelector('#pnl-logs .pnl-n').id = 'lgCount';
    $('#lgSearch').addEventListener('input', (e) => { LG.filter.q = e.target.value; paintLogs(false); });
  }
  await refreshLogs(true);
};
POLL.logs = [() => refreshLogs(false), 5000];
/* ---------------- brand + boot ---------------- */
function brandMark() {
  // "exit aperture": a doorway made of signal arcs
  return `<svg viewBox="0 0 40 40" class="brand-svg" aria-hidden="true">
    <rect x="1" y="1" width="38" height="38" rx="11" class="bm-bg"/>
    <path d="M13 30V15a7 7 0 0114 0v15" class="bm-door"/>
    <path d="M9 30V14.5a11 11 0 0122 0V30" class="bm-arc"/>
    <circle cx="20" cy="22" r="2.6" class="bm-dot"/>
    <path d="M7 30h26" class="bm-floor"/></svg>`;
}
// Generative "exit constellation" art for the login screen (no globes):
// deterministic points connected into a network, slowly drifting.
function authArt() {
  let seed = 7;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  const pts = Array.from({ length: 26 }, () => [20 + rnd() * 360, 20 + rnd() * 360, 1 + rnd() * 2.4]);
  const lines = [];
  pts.forEach((a, i) => pts.forEach((b, j) => { if (j > i) { const d = Math.hypot(a[0] - b[0], a[1] - b[1]); if (d < 92) lines.push(`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" style="--o:${(1 - d / 92).toFixed(2)}"/>`); } }));
  const hubs = [3, 9, 15, 21];
  return `<svg viewBox="0 0 400 400" class="art-svg" aria-hidden="true"><g class="art-l">${lines.join('')}</g>
    <g class="art-p">${pts.map((p, i) => `<circle cx="${p[0].toFixed(1)}" cy="${p[1].toFixed(1)}" r="${hubs.includes(i) ? 4.2 : p[2].toFixed(1)}" class="${hubs.includes(i) ? 'hub' : ''}" style="--d:${(i * 0.37).toFixed(2)}s"/>`).join('')}</g></svg>`;
}
function boot() {
  $$('[data-brand]').forEach((el) => { el.innerHTML = brandMark(); });
  const art = $('#authArt'); if (art) art.innerHTML = authArt();
  $$('[data-ic]').forEach((el) => { el.innerHTML = icon(el.dataset.ic); });
  if (localStorage.getItem('cp_rail') === 'mini') $('#app').classList.add('rail-mini');
  bindAuth();
  applyTheme(false); applyDensity();
  initAuth().catch((e) => toast(String(e.message || e), true));
}
boot();
