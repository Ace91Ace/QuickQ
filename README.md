# SMARTQUEUE

SMARTQUEUE is a digital queue management system with:
- **FastAPI backend** (with Redis for real-time queue storage)
- **React Native (Expo) user app** for joining and tracking the queue
- **React admin dashboard** for managing and serving the queue

---

## 🗂️ Project Structure

```
SMARTQUEUE/
├── backend/         # FastAPI backend (API, Redis)
├── smartQapp/       # User mobile app (React Native/Expo)
├── admin-dashboard/ # Admin web dashboard (React)
```

---

## 🚀 Live Demos

- **Backend API:** [https://smartqueue-backend-17gx.onrender.com](https://smartqueue-backend-17gx.onrender.com)
- **Admin Dashboard:** [https://smartqueue-admin.vercel.app](https://smartqueue-admin.vercel.app)
- **User App:** Use Expo Go and scan the QR code in `smartQapp` (see below)

---

## ⚡ Quick Start

### 1. **Backend**
```sh
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
- Set `REDIS_URL` in your environment (see backend README for details).

### 2. **User App (Expo)**
```sh
cd smartQapp
npm install
npx expo start
```
- Scan the QR code with Expo Go to run on your phone.

### 3. **Admin Dashboard**
```sh
cd admin-dashboard
npm install
npm start
```
- Or visit the [live dashboard](https://smartqueue-admin.vercel.app).

---

## 📱 Screenshots

![WhatsApp Image 2025-07-16 at 16 50 28_b88cd2ab](https://github.com/user-attachments/assets/d7b773bc-4341-4081-823d-7b944c51ff49)

![WhatsApp Image 2025-07-16 at 16 50 28_c5895a3e](https://github.com/user-attachments/assets/6fc8b48f-0a4d-4903-90ea-00c4a2885205)

![WhatsApp Image 2025-07-16 at 16 50 29_fe8f1ec1](https://github.com/user-attachments/assets/0cab997d-c13f-4946-a217-31a02a49a7e3)

![WhatsApp Image 2025-07-16 at 16 50 29_8c66fa5e](https://github.com/user-attachments/assets/db8d324a-a758-4e45-aa54-dd624b946ec3)

---

## 🙋‍♂️ About

Created by [@ftttmhh](https://github.com/ftttmhh).  
For questions or contributions, open an issue or pull request!

---

## 📝 License

MIT License.

