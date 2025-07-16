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
---------------------------------USER APP---------------------------------

![WhatsApp Image 2025-07-16 at 16 50 28_7b653233](https://github.com/user-attachments/assets/37440b36-7d70-4d9a-a217-dfa46b0963a8)
![WhatsApp Image 2025-07-16 at 16 50 28_ee60f70c](https://github.com/user-attachments/assets/9e3f0c43-12e9-4e1c-8d96-5ed5cd919de0)

------------------------------ADMIN DASHBOARD-----------------------------

![WhatsApp Image 2025-07-16 at 16 50 29_9ab0dd4d](https://github.com/user-attachments/assets/275e8d92-1870-417c-9b09-62229d34087c)
![WhatsApp Image 2025-07-16 at 16 50 29_3784f8be](https://github.com/user-attachments/assets/c7c9b7be-8a45-41e2-aeff-ea7928ae36fa)


---

