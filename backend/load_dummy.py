import os
import django
from django.utils import timezone

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "training.settings")
django.setup()

from mainpage.models import Lecture, Tag

dummy_lectures = []

categories = ['リーダーシップ', 'ビジネスマナー', '営業力']
areas = ['新人研修', '中堅社員', '管理職']
price_ranges = ['無料', '1万円以下', '高価格']

price_map = {
    '無料': 0,
    '1万円以下': 9000,
    '高価格': 30000
}

id_counter = 1

for category in categories:
    for area in areas:
        for price_label in price_ranges:
            lecture = {
                'title': f'{category}講座（{area}・{price_label}）',
                'course_name': f'{category}コース No.{id_counter}',
                'theme': f'{category}の基本',
                'target': area,
                'format': 'オンライン',
                'price': price_map[price_label],
                'image_url': "https://via.placeholder.com/300x180.png?text=Dummy+Image",
                'url': '#',
                'description': f'{category}に関する{area}向けの講座です。価格帯：{price_label}',
                'tags': [category, area, price_label],
            }
            dummy_lectures.append(lecture)
            id_counter += 1

for lec_data in dummy_lectures:
    tag_objs = []
    for tag_name in lec_data['tags']:
        tag_obj, created = Tag.objects.get_or_create(name=tag_name)
        tag_objs.append(tag_obj)

    lecture = Lecture.objects.create(
        title=lec_data['title'],
        course_name=lec_data['course_name'],
        theme=lec_data['theme'],
        target=lec_data['target'],
        format=lec_data['format'],
        price=lec_data['price'],
        image_url=lec_data['image_url'],
        url=lec_data['url'],
        created_at=timezone.now(),
        updated_at=timezone.now(),
    )
    lecture.tags.set(tag_objs)
    lecture.save()

print(f"合計 {len(dummy_lectures)} 件のダミーデータを作成しました。")
