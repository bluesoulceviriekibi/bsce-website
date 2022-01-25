+++
aliases = []
date = 2022-01-24T21:00:00Z
draft = true
title = "Oyun Çevirisi Nasıl Yapılır?"

+++
Merhaba, beni HasanH olarak tanıyor olabilirsiniz. Çevirilerle ilgili gelen sitemler ve sorular beni bu yazıyı yazmaya itti. Oyun çevirisi yapmak istiyorsanız ama nereden başlayacağınızdan emin değilseniz veya sadece bilgi edinmek istiyorsanız umarım bu yazı size katkı sağlar.

#### MADDE 1: YETERLİ BİLGİYE SAHİP OL

Öncelikle çevireceğiniz oyun hakkında yeterli bilgiye sahip olmalısınız. Bir süre oynamak ve oyunun ilerleyişinin ne tarzda olduğunu anlamak daha kesin çeviriler yapmanıza olanak sağlayacaktır.

Kelimelerin birden fazla anlamı olabileceği için hangi anlamda çevireceğinizi tam olarak anlamak için de çok yararlı bir adım bu. Bu konuyla ilgili iki örneğim var, birincisini bir arkadaşım iletmişti zamanında.

* _The Walking Dead oyununun bir bölümünde Kenny isimli karakter, uyumaya hazırlanan birine “Night!” der. Oyunun Türkçe çevirisinde bu söz “Gece!” olarak çevrilmiştir._
* _Brooklyn Nine-Nine isimli dizide Jake Peralta isimli karakter, her zaman “Nice!” demek yerine “Noice!” tabirini kullanır. Bu söz Türkçeye “Gürültü! ve “Buz Yok!” şeklinde çevrilmiştir._

Bu iki örnekteki hata bariz şekilde çevrilen içeriğe hakim olunmamasıyla alakalı. İlk örnek gönüllü bir çeviriye ait, ikincisi ise Netflix’e ait bir çeviriye. Gönüllü çevirilerdeki hataları bir raddeye kadar anlayabilirken ücretli çevirilerdeki hataları anlamakta zorluk çekiyorum. Gönüllü çevirilerde ortada bir para akışı yok ve çevirmenler kişisel hayatlarından zaman ayırarak çeviriyi ilerletmek zorundalar. Fakat çevirmenliği bir para kazanma aracı olarak görüyorsan hakkını vererek çevirmelisindir diye düşünüyorum. Tabii çevirideki bu kalitesizliğin sebebi düşük ücret gibi sebeplerle açıklanabilir, üzerine özel bir yazı bile yazılabilir.

#### MADDE 2: ÇEVRİLECEK DOSYALARI BUL VE ÇIKART

Oyunlardaki çevrilecek kısımları bulmak biraz uğraştırıcı olabilir. Her oyunun çevrilecek kısımları farklı farklı yerlerde karşınıza çıkabilir. Çevireceğiniz oyunun dosya konumunda “translation” isminde bir klasör bile bulunabilir bazen, bazen ise tuhaf uzantılı dosyaların içinde kaybolursunuz.

Bu maddeyi hızlıca geçmenin tek yolu araştırmak. Çevrilecek kısımların olduğu dosyayı ve uzantısını bulursanız, o dosyanın nasıl açılabileceğine dair internette araştırma yapabilirsiniz.

Araştırmalarınızın sonucunda bir şekilde çevrilecek dosyaya ulaştıysanız, o dosya yüksek ihtimalle not defteri ile açılabilir halde olacaktır. Eğer not defteri ile açılabilir haldeyse size önerim “[**Notepad++**](https://notepad-plus-plus.org/downloads/)” isimli programı kullanmanızdır, kendisi çok rahat ve basit.

#### MADDE 3: ÇEVİRİYİ YAP VE TEKRAR PAKETLE

Bu maddenin ilk kısmı çok açık, ÇEVİR. Çevirirken size yardımcı olması için en bilinen sözlüklerden birini ([**Cambridge**](https://dictionary.cambridge.org), [**Oxford**](https://www.oxfordlearnersdictionaries.com) vs.), [**Urban Dictionary**](https://www.urbandictionary.com)’i ve [**tureng**](https://tureng.com/tr/turkce-ingilizce)’i öneririm. Urban Dictionary, herkesin bir şeyler eklemekte özgür olduğu bir yer olduğu için sokak ağzı, argo ve bazı küçük topluluklar tarafından kullanılan çoğu kelimeyi içerebiliyor. Herhangi tuhaf bir kısaltmayla karşılaşırsanız bu siteye uğrayabilirsiniz. Sanıyorum ki Tureng de Urban gibi isteyenin kelimelere istediği açıklamayı eklediği bir site, tek farkı Türkçe çevirilerini bulabilmeniz. Çok bilindik ve daha resmi olan kelimeleri arıyorsanız tabii ki bildiğiniz sözlüklerden şaşmayın.

(Ayrıca, "[**Multi Sözlük**](https://chrome.google.com/webstore/detail/multi-s%C3%B6zl%C3%BCk/dgjbiomnpnpdickhihabccnbhpipddch?hl=tr)" isimli eklenti de gayet kullanışlı, öneririm.)

Sözlüklerden çıkıp başka bir konuya geçeyim, toplu çeviriler. Eğer birden fazla kişiyle, ekipçe bir çeviri yapacaksanız burada iki yolunuz var demektir. Çevrim içi ve çevrim dışı çeviri. (İsimleri var mı emin değilim, kendim koydum.)

* _Çevirinizi ekibinizle beraber çevrim içi olarak yürütmek istiyorsanız, size göre siteler var._ [**_poedit.net_**](https://poedit.net) _bunlardan biri. Yapmanız gereken tek şey çevrilecek yerleri paylaşmak._
* _Çevirinizi ekibinizle beraber çevrim dışı olarak yürütmek istiyorsanız, yapmanız gereken tek şey çevrilecek olan dosyayı parçalara ayırmak. Bunun için yine_ [**_Notepad++_**]() _işinizi kolaylaştıracaktır satır sayılarından ötürü. Parçalara ayırdıktan sonra ekip arkadaşlarınıza gönderin ve çeviri maddesini tamamlayın!_

_Aslında bu kısım tam olarak tamamlanmış sayılmaz, en azından bizim için… Oyunun içerisinde olan görselleri ve sesleri de çevirmek isteyebilirsiniz. Bunlar yine sizin oyun dosyalarının içinde gezinip bulacağınız şeyler. Görselleri ve sesleri çevirmek için yardımcı programlar kullanmalısınız. Görsel düzenleme ve ses kaydetme programları hakkında bilgiyi çeşitli kaynaklardan bulabilirsiniz._

Sıradaki mesele çeviriyi tekrar paketlemek. Klasörlerin içinden farklı programlar kullanarak bulmuş olduğunuz dosyaları çevirdiniz ve öylece orada bırakıp çevirinizin oyuna yerleşmiş olmasını bekleyemezsiniz. Tekrar paketleyerek sistem kandırılıyor gibi düşünebilirsiniz. Dosyanın içini açtık, değiştirdik ve hiçbir şey olmamış gibi tekrar paketleyip kapatıyoruz. Bu adım için bol bol araştırma gerekli yine…

#### (ŞANSSIZSANIZ) MADDE 4: FONTU AYARLA

Eğer şanslıysanız bu maddeye hiç ihtiyaç yok. Bazı oyunlar Türkçe karakterleri (Ğ,Ü,İ gibi) destekler. Bazıları ise desteklemez, oyunu açtığınızda ve Ü yerine garip bir sembol gördüğünüzde anlarsınız bu maddenin önemini. Ama korkmayın, çok zor bir madde değil bu. Sadece uğraştırıcı diyelim. Oyunun fontunu dosyaların arasından bulup Türkçe karakterler eklemelisiniz. Bunun için “[**FontCreator**](https://www.high-logic.com/font-editor/fontcreator)” isimli programı öneririm. Kullanımını araştırabilirsiniz, ana başlığın dışına çıkmayalım.

#### MADDE 5: KONTROL VE TEST

Birçok hatanın gün yüzüne çıktığını görünce sakın moralini bozmayın. Bu aşama tamamen hataların anlaşılması için var. Burada da bir önerim var. O da çeviren kişilerin bu aşamada rol oynamaması. İnsan kendi çevirisini gördüğünde hatanın farkında varamayabilir. Hataları anladıktan sonra çözüme kavuşturun ve en zevkli kısma geçin!

#### MADDE 6: YAYIMLA

Bence emek verilen işi veya eseri bitirip insanlara sunmak en keyifli şeylerden biri. Çeviriyi bitirmenin verdiği keyifle ve rahatlıkla çeviriyi yayımlayın ve insanların geri bildirimlerini okuyun!

Konuyla ilgili sorularınızı ve düşüncelerinizi iletmeyi unutmayın! Yazı sayfalarının daha iyi görünmesine dair de önerilerinizi bekliyoruz!