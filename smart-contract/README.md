#### kontrattaki bazı değişikliler

#### `link account metodunun çağırılması için user sisteme kayıt olmuş olmalı (isRegistered modifier eklendi)`

#### `link account metodunda eklenen child account persons arrayında ve userListte gözükmüyordu onlar eklendi`
#### `ayrıca findChild ve diğer fonk çalışması için child hesaplarda userListe eklendi ama persons arrayine eklenmiyor , child userList te ve person objesinin altında yer alıyor`

#### `child ı bulmak isteyen user , findTheChild metodunu çağırmalı -> userlistten person objesi ve integer dönddürüyor(person altındaki indeksi)`


#### `getChildren metodu kontrat değiştiği için işlevsizdi o yenilendi`

#### `sendEther işleminden önce owner(admin) tarafından allowance and approve işlemleri gerçekleştirilmeli aksi halde hata alırız , bunlar react tarafında sendEther fonk dan önce çağırılıp sorun çözülecek , etherle işlem yapıldıktan sonra aynı şekilde admin tarafından başka fonk çağırılarak usera token hediye edilecek , web kullanıcı sendEther işlemi yaparken biz 3 farklı iş yapmış olucaz testte işleyişi var`