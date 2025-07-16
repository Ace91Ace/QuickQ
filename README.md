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



![WhatsApp Image 2025-07-16 at 16 50 29_3784f8be](https://github.com/user-attachments/assets/effad8c1-1333-45bd-ab8a-ee86fca8c60c)
![WhatsApp Image 2025-07-16 at 16 50 29_9ab0dd4d](https://github.com/user-attachments/assets/78c23d6f-d193-48f4-bbb5-11d3289b8170)
![WhatsApp Image 2025-07-16 at 16 50 28_ee60f70c](https://github.com/user-attachments/assets/36db313f-d512-40d8-a4ce-12da3ee66e76)
![WhatsApp Image 2025-07-16 at 16 50 28_7b653233](https://github.com/user-attachments/assets/8a19b0c4-1cf7-49d0-b4ea-022beab0e9d9)

---

## 🙋‍♂️ About

Created by [@ftttmhh](https://github.com/ftttmhh).  
For questions or contributions, open an issue or pull request!

---

## 📝 License

MIT License.

