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


![WhatsApp Image 2025-07-16 at 16 50 29_3784f8be](https://github.com/user-attachments/assets/6202eb8b-7d54-49d9-8e64-6a256e77aa26)
![WhatsApp Image 2025-07-16 at 16 50 29_9ab0dd4d](https://github.com/user-attachments/assets/44d98261-2273-4386-b9bf-d96db44133e8)
![WhatsApp Image 2025-07-16 at 16 50 28_ee60f70c](https://github.com/user-attachments/assets/bc28f1dd-91e4-4d27-a094-62c60e57bfd1)
![WhatsApp Image 2025-07-16 at 16 50 28_7b653233](https://github.com/user-attachments/assets/1cf8c2a5-94a9-4023-8f08-c4a87f9f8047)

---

## 🙋‍♂️ About

Created by [@ftttmhh](https://github.com/ftttmhh).  
For questions or contributions, open an issue or pull request!

---

## 📝 License

MIT License.

