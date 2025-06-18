from mainpage.models import Lecture, Tag  # 適切なアプリ名に変更してください

# 1. タグを一括作成（重複は除外）
tag_names = [
    "新入社員", "ビジネスマナー", "オンライン", "公開型", "階層別", "対面", "グループワーク", "OJT",
    "マインドセット", "ハイブリッド", "若手社員", "基礎知識", "自己理解", "ビジネススキル"
]
tag_objects = {}
for name in tag_names:
    tag, _ = Tag.objects.get_or_create(name=name)
    tag_objects[name] = tag

# 2. 講座データ（6件分のみ例）
lectures = [
    {
        "title": "新入社員研修 ベーシック（オンライン）",
        "course_name": "ベーシック",
        "theme": "ビジネスマナー・基本行動",
        "target": "新入社員",
        "format": "オンライン",
        "price": 55000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/new_basic_online.png",
        "url": "https://hrd.mynavi.jp/service/service-21483/",
        "tags": ["新入社員", "オンライン", "ビジネスマナー", "自己理解"]
    },
    {
        "title": "新入社員研修 ベーシック（公開型）",
        "course_name": "ベーシック",
        "theme": "ビジネスマナー・基本行動",
        "target": "新入社員",
        "format": "公開型",
        "price": 66000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/new_basic_public.png",
        "url": "https://hrd.mynavi.jp/service/service-21483/",
        "tags": ["新入社員", "公開型", "ビジネスマナー", "自己理解"]
    },
    {
        "title": "新入社員研修 OJTリーダー編",
        "course_name": "OJTリーダー",
        "theme": "OJT・マネジメント",
        "target": "若手社員",
        "format": "対面",
        "price": 77000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/ojt_leader.png",
        "url": "https://hrd.mynavi.jp/service/service-25895/",
        "tags": ["若手社員", "対面", "OJT", "マインドセット"]
    },
    {
        "title": "新入社員研修 プレ配属型（ハイブリッド）",
        "course_name": "プレ配属型",
        "theme": "マインドセット・業務理解",
        "target": "新入社員",
        "format": "ハイブリッド",
        "price": 99000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/pre_assign.png",
        "url": "https://hrd.mynavi.jp/service/service-26340/",
        "tags": ["新入社員", "ハイブリッド", "マインドセット", "業務理解"]
    },
    {
        "title": "若手社員研修 ステップアップ（公開型）",
        "course_name": "ステップアップ",
        "theme": "ビジネススキル",
        "target": "若手社員",
        "format": "公開型",
        "price": 60500,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/stepup_young.png",
        "url": "https://hrd.mynavi.jp/service/service-26500/",
        "tags": ["若手社員", "公開型", "ビジネススキル", "自己理解"]
    },
    {
        "title": "新入社員研修 ベーシック（対面）",
        "course_name": "ベーシック",
        "theme": "ビジネスマナー",
        "target": "新入社員",
        "format": "対面",
        "price": 66000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/basic_face.png",
        "url": "https://hrd.mynavi.jp/service/service-21483/",
        "tags": ["新入社員", "対面", "ビジネスマナー", "グループワーク"]
    },
    # 残り8件ここに追加できます
        {
        "title": "新入社員研修 ベーシック（ハイブリッド）",
        "course_name": "ベーシック",
        "theme": "ビジネスマナー・基本行動",
        "target": "新入社員",
        "format": "ハイブリッド",
        "price": 66000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/new_basic_hybrid.png",
        "url": "https://hrd.mynavi.jp/service/service-21483/",
        "tags": ["新入社員", "ハイブリッド", "ビジネスマナー", "自己理解"]
    },
    {
        "title": "新入社員研修 IT・DX人材育成型",
        "course_name": "IT・DX人材育成型",
        "theme": "ITスキル・DX思考",
        "target": "新入社員",
        "format": "対面",
        "price": 88000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/it_dx.png",
        "url": "https://hrd.mynavi.jp/service/service-22111/",
        "tags": ["新入社員", "対面", "IT", "DX", "業務理解"]
    },
    {
        "title": "新入社員研修 グローバルマインドセット",
        "course_name": "グローバルマインドセット",
        "theme": "異文化理解・マインド",
        "target": "新入社員",
        "format": "オンライン",
        "price": 71500,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/global_mindset.png",
        "url": "https://hrd.mynavi.jp/service/service-25222/",
        "tags": ["新入社員", "オンライン", "異文化", "マインドセット"]
    },
    {
        "title": "新入社員研修 DXリテラシー入門",
        "course_name": "DXリテラシー入門",
        "theme": "DX基礎",
        "target": "新入社員",
        "format": "オンライン",
        "price": 33000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/dx_literacy.png",
        "url": "https://hrd.mynavi.jp/service/service-23452/",
        "tags": ["新入社員", "オンライン", "DX", "基礎知識"]
    },
    {
        "title": "新入社員研修 プレ配属型（対面）",
        "course_name": "プレ配属型",
        "theme": "業務理解・組織理解",
        "target": "新入社員",
        "format": "対面",
        "price": 99000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/pre_assign_face.png",
        "url": "https://hrd.mynavi.jp/service/service-26340/",
        "tags": ["新入社員", "対面", "業務理解", "マインドセット"]
    },
    {
        "title": "新入社員研修 eラーニング（基礎マナー編）",
        "course_name": "eラーニング（基礎マナー編）",
        "theme": "ビジネスマナー・基礎知識",
        "target": "新入社員",
        "format": "オンライン",
        "price": 22000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/elearning_basic.png",
        "url": "https://hrd.mynavi.jp/service/service-23345/",
        "tags": ["新入社員", "オンライン", "ビジネスマナー", "基礎知識"]
    },
    {
        "title": "新入社員研修 グループワーク特化型",
        "course_name": "グループワーク特化型",
        "theme": "チームビルディング・対話力",
        "target": "新入社員",
        "format": "対面",
        "price": 77000,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/groupwork.png",
        "url": "https://hrd.mynavi.jp/service/service-24231/",
        "tags": ["新入社員", "対面", "グループワーク", "マインドセット"]
    },
    {
        "title": "若手社員研修 ステップアップ（オンライン）",
        "course_name": "ステップアップ",
        "theme": "思考力・業務遂行力",
        "target": "若手社員",
        "format": "オンライン",
        "price": 60500,
        "image_url": "https://hrd.mynavi.jp/wp-content/uploads/2023/11/stepup_online.png",
        "url": "https://hrd.mynavi.jp/service/service-26500/",
        "tags": ["若手社員", "オンライン", "ビジネススキル", "自己理解"]
    }
]

# 3. DBにLectureを保存
for data in lectures:
    lecture = Lecture.objects.create(
        title=data["title"],
        course_name=data["course_name"],
        theme=data["theme"],
        target=data["target"],
        format=data["format"],
        price=data["price"],
        image_url=data["image_url"],
        url=data["url"],
    )
    lecture.tags.set([tag_objects[tag] for tag in data["tags"]])