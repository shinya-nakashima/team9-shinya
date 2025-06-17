FROM python:3.11-slim

# 作業ディレクトリ
WORKDIR /app

# Pythonパッケージをインストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリケーションコードをコピー
COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]