import { Goods } from "src/app/model/goods.model";

export class DataSourse {
    private data: Goods[];

    constructor() {
        this.data = new Array<Goods>(
            new Goods(100001, "./assets/image/card-1.jpg", "Крабовые палочки", "Упаковка 100гр", 0.6, "рыба", "Производитель - Россия. Температура хранения: от 0-+5. Срок хранения: 18 мес", "Суперцена"),
            new Goods(100002, "./assets/image/card-2.jpg", "Крабовое мясо - супер", "Упаковка 100гр", 0.8, "рыба", "Страна: Белорусь. Срок хранения: 18 мес. Температура хранения: от 0+-5"),
            new Goods(100003, "./assets/image/card-3.jpg", "Морские мидии", "Размер 300/500 1 кг", 5.6, "рыба", "Страна: Новая Зеландия. Срок хранения: 12 мес. Температура хранения: от -18 -20"),
            new Goods(100004, "./assets/image/card-4.jpg", "Филе стейка тунца", "Упаковка 100гр", 7.7, "рыба","Страна: Китай. Срок хранения: 12 мес. Температура хранения: от -18 -20"),
            new Goods(100005, "./assets/image/card-5.jpg", "Креветка сух. зам.", "POLAR 1 кг", 8.9, "рыба", "Мурманск. Вес: 1000 г" ),
            new Goods(100006, "./assets/image/card-6.jpg", "Свежемороженая горбуша", "Горбуша н/р 1кг", 3.2, "рыба", "Не разделанная, свежемороженая Вес: 1000 г", "Суперцена" ),
            new Goods(100007, "./assets/image/card-7.jpg", "Морской гребешок", "Упаковка 1кг", 26.2, "рыба", "Энергетическая ценность (ккал на 100 г) 88 Белки, г (в 100 г) 17,2 Жиры, г (в 100 г)2. Вес: 1000 г"),
            new Goods(100008, "./assets/image/card-8.jpg", "Филе Окуня", "Окуня 1кг", 5.4, "рыба", "Страна: Россия. Срок хранения: 12 мес. Температура хранения: от -18 -20" ),
            new Goods(100009, "./assets/image/card-9.jpg", "Стейк Лосося", "Лосось 1кг", 12.4, "рыба", "Страна: Россия. Срок хранения: 12 мес.Температура хранения: от -18 -20.Вес: 1000 г"),
            new Goods(100011, "./assets/image/card-11.jpeg", "Брокколи З/М", "Упаковка 1кг", 2.4, "овощи", "Брокколи способствует правильному балансу холестиринового обмена в организме, является отличным средством для лечения малокровия (благодаря большому содержанию железа, меди и протеинов)", "Страна: Россия. Срок хранения: 6 мес. Температура хранения: от -15 -25. Вес: 1000 г"),
            new Goods(100012, "./assets/image/card-12.jpeg", "Шпинат Замороженый", "Упаковка 1кг", 2.8, "овощи", "Свойства шпината, а также полезные элементы: кальций, магний, железо, натрий, калий, витамины В1, В2, В5, В6, В9. Вес: 1000 г"),
            new Goods(100013, "./assets/image/card-13.jpg", "Картофель фри", "быстрозамороженный, 1 кг", 2.2, "овощи", "Состав: Картофель, растительное масло. Производитель: Avico B.V. Условия хранения:-18'C. Срок годности, дней:730. Белки, г:2. Жиры, г:4. Углеводы, г:23. Вес: 1000 г", "Суперцена"),
            new Goods(100014, "./assets/image/card-14.jpg", "Капуста цветная", "Замороженная 1кг", 2.1, "овощи", "Страна: Россия. Срок хранения: 6 мес. Температура хранения: от -15 -25. Вес: 1000 г"),
            new Goods(100015, "./assets/image/card-15.jpg", "Лечо З/М 1кг", "Смесь Болгарского перца сладкого глубокой заморозки развесная", 1.9, "овощи", "Страна Россия. Упаковка пакет. Условия хранения 2 года при температуре -18С. Пищевая ценность белки - 1,1г, жиры - 0,2г, углеводы - 5,7г. Энергетическая ценность 29,4 Ккал. Состав: томаты, перец сладкий, кабачки, лук репчатый, морковь"),
            new Goods(100021, "./assets/image/card-21.jpg", "Вишня без косточки", "Замороженная 1 кг", 3.7, "фрукты", "Замороженная Вишня долго хранится в холодильнике и обладает теми же свойствами, что и свежие ягоды. Страна: Россия. Срок хранения: 6 мес. Температура хранения: от -15 -25. Вес: 1000 г"),
            new Goods(100022,"./assets/image/card-22.jpg", "Клубника", "Замороженная 1 кг", 2.5,  "фрукты", "Сбор производится в ручную и очень бережно. Ягода нежная и хранится в свежем виде всего 2-3 дня. При сборе Клубники мы делаем все усилия, чтобы свежесобранные ягоды замораживались в день сбора. Замороженная Клубника долго хранится в холодильнике и обладает теми же свойствами, что и свежая ягода. Страна: Россия. Срок хранения: 6 мес. Температура хранения: от -15 -25. Вес: 1000 г", "Суперцена"),
            new Goods(100023, "./assets/image/card-23.jpg", "Клюква", "Упаковка 1кг", 4.7, "фрукты", "В состав ягоды клюквы входит много полезных веществ, микроэлементов, витаминов: витамины группы В;железо, калий, цинк, йод, фосфор, магний; витамин С. Витамины группы В входящие в состав клюквы: полезны для кожи волос ногтей; укрепляют нервную систему; улучшают настроение. Страна: Россия. Срок хранения: 6 мес. Температура хранения: от -15 -25. Вес: 1000 г"),
            new Goods(100024, "./assets/image/card-24.jpg", "Абрикос половинки", "Упаковка 1кг", 2.5, "фрукты", "Абрикос содержит в себе: Витамины А, В, С, Минералы, Железо, Калий, Йод, Фосфор, Магний. Вес: 1000 г"),
            new Goods(100025, "./assets/image/card-25.jpg", "Красная смородина", "замороженная 1кг", 2.5, "фрукты", "Ягоды красной смородины богата следующими витаминами: витамином А, С, Е железо, калий янтарную и яблочную кислоту Содержит в себе большое количество антиоксидантов, способных противостоять раковым клеткам. Красная смородина часто применяется в народной медицине: оказывает вяжущее, мочегонное, жаропонижающее, противовоспалительные действия. Замороженная Красная смородина долго хранится в холодильнике и обладает теми же свойствами, что и свежая ягода. Вес: 1000 г", "Суперцена"),
            new Goods(100026, "./assets/image/card-26.jpg", "Смесь Компотная З/М", "Смесь замороженная фруктово- ягодная для компота", 2.2, "фрукты", "Состав компотной смеси: Слива с/к 40%. Черная смородина 20%. Клубника 20%. Вишня с/к 20%", "Суперцена"),
            new Goods(100031, "./assets/image/card-31.jpg", "Карэ ягненка 1кг", "На 100 г продукта 310 ккал", 17.0, "мясо", "Волгоград. На 100 г продукта 310 ккал. Белки 16,32 г. Жиры 26,63 г. Углеводы 0 г. Хранение: не более 3 суток при t 0°С + 4 °с"),
            new Goods(100032, "./assets/image/card-32.jpg", "Лопатка Баранина", "Калории, ккал:284 на 100 гр.", 6.6, "мясо", "Волгоград . Калории, ккал:284 на 100 гр. 284 Белки, г: 15.6 Жиры, г: 25.0 Углеводы, г: Хранение: не более 3 суток при t 0°С + 4 °с", "Суперцена"),
            new Goods(100033, "./assets/image/card-33.jpg", "Люля-кебаб баранина", "Хранение: не более 3 суток при t 0°С + 4 °с", 9.4, "мясо", "Хранение: не более 3 суток при t 0°С + 4 °с. Состав: баранина лопатка ,окорок , лук, соль, специи. Пищевая ценность на 100 гр. продукта: белки – 15,2 г., жиры- 7,1 г., углеводы7,0 г калорийность 161 ккал."),
            new Goods(100034, "./assets/image/card-34.jpg", "Шейка свиная", "Охлаждённая 1кг", 7.0, "мясо", "Энергетическая ценность в 100 г: 230 кКал/965 кДж Пищевая ценность на 100 г: белки – 12,0 жиры – 20,0 углеводы - 0 Хранить не более трёх суток при t от 0 до +4 °С Свиная шейка (шея, шейный отруб) - употребляемая в пищу часть туши домашней свиньи. Отличается нежной структурой мякоти и повышенным содержанием жировых тканей. Употребляется в пищу преимущественно в жареном или запеченном виде."),
            new Goods(100035, "./assets/image/card-35.jpg", "Ушки свиные", "Охлаждённые 1кг", 3.2, "мясо", "Энергетическая ценность на 100 г: 211 кКал. Пищевая ценность на 100 г: белки –21 жиры – 14 углеводы – 0 Хранение при t от 0 до +4 °С не более трёх суток. Свиные уши относятся к свиным субпродуктам второй категории. Основными признаки качества являются: свежесть, чистота, отсутствие внешних признаков порчи и посторонних запахов.", "Суперцена"),
            new Goods(100036, "./assets/image/card-36.jpg", "Отбивные из свиной шейки", "Горбуша н/р 1кг", 6.4, "мясо", "Свинина, говядина в панировке", "Суперцена"),
            new Goods(100037, "./assets/image/card-37.jpg", "Чебуреки домашние", "Замороженные 1кг", 5.1, "мясо", "Изготовитель: ИП Бондаренко А.А. Г.Кострома"),
            new Goods(100038, "./assets/image/card-38.jpg", "Котлеты Домашние с чесноком", "Охлаждённые 1кг", 7.1, "мясо", "Изготовитель: ИП Бондаренко А.А. Г.Кострома"),
            new Goods(100039, "./assets/image/card-39.jpg", "Вареники домашние с картофелем и грибами 1 кг.", "Охлаждённые 1кг", 4.5, "мясо", "Способ приготовления: Закладывать в кипящую воду на (1 кг- 4 литра воды). После всплытия, довести до готовности на слабом огне в течении 3-4 минуты. Соль по вкусу. Изготовитель: ИП Бондаренко А.А. Г.Кострома"),
            new Goods(100041, "./assets/image/card-41.jpg", "Балык СВИНОЙ 1кг", "В упаковке от 600 гр", 5.9, "колбасы", "Страна: Россия. Срок хранения: 30 сут. Температура хранения: от 0 + 4. Вес: 1000 г"),
            new Goods(100042, "./assets/image/card-42.jpg", "Ребра натуральные копченые 1кг", "Свиные ребра домашнего копчения", 5.2, "колбасы", "Страна: Россия. Срок хранения: 30 сут. Температура хранения: от 0 + 4. Вес: 1000 г", "Суперцена"),
            new Goods(100043, "./assets/image/card-43.jpg", "Колбаса Конская", "Горячего копчения 1кг", 9.4, "колбасы", "Цена за 1 шт. Вес: 1000 г"),
            new Goods(100044, "./assets/image/card-44.jpg", "Домашняя Грудинка", "Охлаждённая 1кг", 6.7, "колбасы", "Вес упаковки от 1.500 гр. Вес: 1000 г"),
            new Goods(100045, "./assets/image/card-45.jpg", "Сало домашнее Фермерское", "Сало с чесноком с мясом", 5.8, "колбасы", "Температура хранения: от 0 + 4. Вес: 1000 г", "Суперцена"),
            new Goods(100051, "./assets/image/card-51.jpg", "Сыр Моцарелла фермерский Рязань", "Сыр 1кг", 7.0, "сыры", "Натуральный сыр, изготовленный по классическим рецептам, чрезвычайно полезен для любого человека благодаря содержанию в нем белка, кальция, витаминов и других микроэлементов. Имена такие сыры, изготовленные традиционным способом, помимо своей полезности, обладают ещё и потрясающим вкусом и ароматом, которые создают опытные сыровары – фермеры, вкладывающие в свою работу все свои знания, умения, силы и душевное тепло. Фермеры имеют собственное молочное стадо. Поэтому, фермерские сыры изготавливаются с соблюдением уникальной рецептуры из полностью экологически чистого сырья, то есть из натурального молока высшей категории. Эта же же продукция попадает и на стол к самому фермеру, этим же питаются и его близкие.", "Суперцена"),
            new Goods(100052, "./assets/image/card-52.jpg", "Сыр Домашний 'Косичка'", "Сыр 1кг", 4.5, "сыры", "Косичка (чечил) – сыр армянской кухни, который по вкусу напоминает сулугуни. Технология производства отличается от сырных продуктов твердых сортов. Особенности продукта и наличие ингредиентов в правильной пропорции помогут приготовить сыр косичку и дома."),
            new Goods(100053, "./assets/image/card-53.jpg", "Рулет Сырно-твороженный фермерский Рязань", "Сыр 1кг", 7.9, "сыры", "Температура хранения: от 0 + 4. Вес: 1000 г."),
            new Goods(100054, "./assets/image/card-54.jpg", "Сыр 'Сметанковый'", "50% Березна 1кг", 8.0, "сыры", "Страна: Белорусь.Температура хранения: от 0 + 4. Вес: 1000 г."),
            new Goods(100055, "./assets/image/card-55.jpg", "Сыр 'Сулугуни фермерский'", "Сыр Сулугуни фермерский Рязань", 7.2, "сыры", "Страна: Россия.Температура хранения: от 0 + 4. Вес: 1000 г.", "Суперцена"),
            new Goods(100061, "./assets/image/card-61.jpg", "Малиновый Сок напиток", "Напиток сокосодержащий с стеклянной таре", 1.0, "напитки", "Вес: 1 литр. Страна: Россия. Срок хранения: с/г 2 года. Температура хранения: от 0 -+20"),
            new Goods(100062, "./assets/image/card-62.jpg", "Гранатовый сок 'Богатырь'", "Сок гранатовай ручной отжим", 1.4, "напитки", "Вес: 1 литр. Страна: Азербайджан. Срок хранения: 24 мес. Температура хранения: от 0-+20", "Суперцена"),
            new Goods(100063, "./assets/image/card-63.jpg", "Вода Мин Рычал-Су газ", "Вода Минеральная лечебно столовая Газированая в стекле", 0.7, "напитки", "Вес: 0,5 литра. Страна: Республика Дагестан. Срок хранения: 24 мес. Температура хранения: от +3 -+26"),
            new Goods(100064, "./assets/image/card-64.png", "Сок со вкусом Манго ж/б", "Страна: Вьетнам, 0.33л", 1.2, "напитки", "Вес: 0,33 литра. Страна: Вьетнам. Срок хранения: 24 мес.Температура хранения: от +5-+30"),
            new Goods(100065, "./assets/image/card-65.jpg", "Кофе в зернах", "Lavazza Crema e Aroma 1кг", 17.3, "напитки", "Кофе в зернах Lavazza Crema e Aroma"),
            new Goods(100066, "./assets/image/card-66.jpg", "Чай Гринфилд", "Голден Цейлон 100 пак.", 3.5, "напитки","100 пакетов", "Суперцена"),
            new Goods(100067, "./assets/image/card-67.jpg", "Коктейль молочный Шоколад", "0.210 мл Беларусь", 0.5, "напитки", "2,5% Ж. С АРОМАТОМ ШОКОЛАДА. Упаковка (емкость): 0,21л. Условия хранения: от 0 до 25°С. Срок годности: 6 месяцев. Упаковка: Тетра Брик Асептик с соломинкой"),
            new Goods(100068, "./assets/image/card-68.jpg", "Квас Лидский Белый", "Квас натурального брожения", 1.2, "напитки", "Квас натурального брожения"),
            new Goods(100069, "./assets/image/card-69.jpg", "Напиток Гуавы", "Напиток без алкогольный сока гуавы с добавлением смеси фруктов и семенами базилика", 1.23, "напитки", "Напиток без алкогольный сока гуавы с добавлением смеси фруктов и семенами базилика. Вес: 0,29 литра. Страна: Вьетнам. Срок хранения: 1,6 мес. Температура хранения: от 0-+26", "Суперцена"),
        )
    }
    getData(): Goods[] {
        return this.data;
    }
}