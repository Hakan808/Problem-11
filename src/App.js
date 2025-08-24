import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

// BoxButton bileşenini yeniden oluşturun ve aşağıdaki görevleri tamamlayın:
// 1. Children prop'unu kullanarak dinamik bir yapı oluşturun. CameraIcon ve VideoCameraIcon gibi içerikleri children ile iletin.
// 2. Tailwind kullanarak aşağıdaki değişiklikleri yapın:
//    - Hover sırasında butonun arka plan rengini değiştirin
//    - Her bir butonun içeriğini dikey olarak ortalayın.
//    - Butonlar arasında daha fazla boşluk bırakmak için Tailwind'in spacing class'larını (space-y) düzenleyin.
// 3. BoxButton bileşenine bir onClick prop'u ekleyin ve tıklandığında farklı  aksiyon gerçekleştirin (alert göstermek gibi).
// 4. Birden fazla BoxButton örneği oluşturarak, her birinin farklı icon ve metin içeriğine sahip olmasını sağlayın.
// 5. Tailwind ile sadece belirli ekran boyutlarında (sm, md, lg) butonların genişliğini değiştirin.

function BoxButton({ children, text ,onClick}) {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:bg-blue-500 transition duration-300 flex flex-col justify-center"
      onClick={onClick}
    >
      {children}

      <span className="mt-2 block text-sm font-semibold text-gray-900">
        {text}
      </span>
    </button>
  );
}

export default function App() {
  return (
    <div className="space-y-12 p-8 max-w-sm mx-auto ">
      <BoxButton text="Yeni bir resim ekleyin" onClick={() => alert("Resim Ekleyiniz")}>
        <CameraIcon className="mx-auto h-12 w-12 text-gray-400 " />
      </BoxButton>
      <BoxButton text="Yeni bir video oluşturun" onClick={() => alert("Video Ekleyiniz") }>
        <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-400" />
      </BoxButton>
    </div>
  );
}
