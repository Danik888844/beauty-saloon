import { cosmetologyBody_slides } from "../img/cosmetologyBody_img/data";
import { cosmetologyFace_slides } from "../img/cosmetologyFace_img/data";
import { cosmetologyMedical_slides } from "../img/cosmetologyMedical_img/data";
import { epilation_slides } from "../img/epilation_img/data";
import { hairdress_slides } from "../img/hairdress_img/data";
import {makeup_slides} from "../img/makeup_img/data";
import {manicure_slides} from "../img/manicure_img/data";
import { massage_slides } from "../img/massage_img/data";

const priceList = [
    {
        title: 'Парикмахерский зал',
        serviceCode: 1,
        slides: hairdress_slides,
        services:[
            {
                serviceTitle: 'Стрижка',
                servicePrices: [
                    {
                        name: 'Женская стрижка + укладка (без мытья)',
                        price: 9600
                    },
                    {
                        name: 'Женская стрижка (без мытья)',
                        price: 6700
                    },
                    {
                        name: 'Стрижка челки',
                        price: 1500
                    },
                    {
                        name: 'Окантовка',
                        price: 3700
                    },
                    {
                        name: 'Стрижка мужская (без мытья)',
                        price: 5500
                    },
                    {
                        name: 'Окантовка мужская',
                        price: 2700
                    },
                    {
                        name: 'Стрижка бороды и усов',
                        price: 2400
                    },
                    {
                        name: 'Стрижка детская (до 8 лет)',
                        price: 4900
                    },
                ]
            },
            {
                serviceTitle: 'Окрашивание',
                servicePrices: [
                    {
                        name: 'Окрашивание корней до 2 см',
                        price: 8300
                    },
                    {
                        name: 'Частичное окрашивание корней (теменная и височно-боковая обл)',
                        price: 3800
                    },
                    {
                        name: 'Окрашивание волос до 30 см',
                        price: 10400
                    },
                    {
                        name: 'Окрашивание волос более 30 см',
                        price: 14800
                    },
                    {
                        name: 'Препигментация до 30 см',
                        price: 7500
                    }
                ]
            },
            {
                serviceTitle: 'Тонирование',
                servicePrices: [
                    {
                        name: 'Тонирование волос до 30 см',
                        price: 7600
                    },
                    {
                        name: 'Тонирование волос более 30 см',
                        price: 10600
                    },
                    {
                        name: 'Камуфлирующее окрашивание SQ Color Camo',
                        price: 5800
                    },
                    {
                        name: 'Окрашивание хной до 30 см',
                        price: 11400
                    },
                    {
                        name: 'Окрашивание хной более 30 см',
                        price: 14800
                    }
                ]
            },
            {
                serviceTitle: 'Доп. процедуры Eliokap',
                servicePrices: [
                    {
                        name: 'Активные натуральные вещества 10 мл',
                        price: 1600
                    },
                    {
                        name: 'Активные натуральные вещества 5 мл',
                        price: 1000
                    },
                    {
                        name: 'Восстанавливающий состав 5 мл',
                        price: 1000
                    },
                    {
                        name: 'Лосьон по типу кожи 5 мл',
                        price: 1000
                    },
                    {
                        name: 'Маска для волос 20 мл',
                        price: 1100
                    }
                ]
            }
        ]
    },
    {
        title: 'Визаж',
        serviceCode: 2,
        slides: makeup_slides,
        services:[
            {
                serviceTitle: 'Визаж',
                servicePrices: [
                    {
                        name: 'Дневной макияж',
                        price: 6900
                    },
                    {
                        name: 'Дневной макияж параллельный',
                        price: 8100
                    },
                    {
                        name: 'Вечерний макияж',
                        price: 8400
                    },
                    {
                        name: 'Вечерний макияж параллельный',
                        price: 9900
                    },
                    {
                        name: 'Частичный макияж',
                        price: 4200
                    },
                    {
                        name: 'Коррекция бровей воском',
                        price: 3000
                    },
                    {
                        name: 'Коррекция бровейм',
                        price: 3000
                    },
                    {
                        name: 'Окрашивание бровей - ХНА',
                        price: 2800
                    },
                    {
                        name: 'Окрашивание бровей',
                        price: 2800
                    },
                    {
                        name: 'Окрашивание ресниц',
                        price: 2800
                    },
                    {
                        name: 'Ламинирование бровей',
                        price: 8700
                    },
                    {
                        name: 'Ламинирование ресниц',
                        price: 10500
                    },
                    {
                        name: 'Подклейка пучков',
                        price: 3900
                    },
                    {
                        name: 'Наращивание ресниц частичное',
                        price: 7600
                    },
                    {
                        name: 'Наращивание ресниц двойное 2,5 D',
                        price: 14100
                    },
                    {
                        name: 'Наращивание ресниц 1,5 D',
                        price: 11200
                    },
                    {
                        name: 'Снятие нарощенных ресниц',
                        price: 3600
                    }
                ]
            },
            {
                serviceTitle: 'Акварельная техника',
                servicePrices: [
                    {
                        name: 'Акварельная техника брови',
                        price: 38500
                    },
                    {
                        name: 'Акварельная техника брови коррекция',
                        price: 27500
                    },
                    {
                        name: 'Акварельная техника губы',
                        price: 38500
                    },
                    {
                        name: 'Акварельная техника губы коррекция',
                        price: 27500
                    },{
                        name: 'Акварельная техника межресничка',
                        price: 22000
                    }
                ]
            }
        ]
    },
    {
        title: 'Маникюр',
        serviceCode: 3,
        slides: manicure_slides,
        services:[
            {
                serviceTitle: 'Маникюр',
                servicePrices: [
                    {
                        name: 'Маникюр без покрытия',
                        price: 3900
                    },
                    {
                        name: 'Маникюр мужской',
                        price: 4200
                    },
                    {
                        name: 'Европейский экспресс маникюр',
                        price: 3300
                    },
                    {
                        name: 'Детский маникюр с покрытием лаком',
                        price: 1800
                    },
                    {
                        name: 'Придание формы ногтей',
                        price: 900
                    },
                    {
                        name: 'Укрепление ногтей акриловой пудрой',
                        price: 1800
                    },
                    {
                        name: 'Ремонт ногтя шелком/акриловой пудрой',
                        price: 900
                    },
                    {
                        name: 'Маникюр Тальон',
                        price: 7200
                    }
                ]
            },
            {
                serviceTitle: 'Педикюр',
                servicePrices: [
                    {
                        name: 'Педикюр без покрытия',
                        price: 6600
                    },
                    {
                        name: 'Мужской педикюр',
                        price: 7100
                    },
                    {
                        name: 'Педикюр Тальон',
                        price: 9900
                    },
                    {
                        name: 'Педикюр Smart/kart без покрытия',
                        price: 8300
                    },{
                        name: 'Детский педикюр с покрытием лаком',
                        price: 3000
                    }
                ]
            },
            {
                serviceTitle: 'Моделирование ногтей',
                servicePrices: [
                    {
                        name: 'Моделирование ногтей под лак',
                        price: 10100
                    },{
                        name: 'Моделирование ногтей гель цветной',
                        price: 9400
                    },{
                        name: 'Моделирование ногтей френч',
                        price: 12400
                    },{
                        name: 'Коррекция искусственных ногтей',
                        price: 7600
                    },{
                        name: 'Моделирование / коррекция 1 ноготь',
                        price: 1300
                    }
                ]
            },
            {
                serviceTitle: 'Покрытие/Снятие',
                servicePrices: [
                    {
                        name: 'Покрытие лак/лечебное',
                        price: 900
                    },{
                        name: 'Покрытие лечебное',
                        price: 900
                    },{
                        name: 'Покрытие гель-лаком',
                        price: 2800
                    },{
                        name: 'Покрытие гель-лаком френч',
                        price: 3600
                    },{
                        name: 'Покрытие гель-лаком один ноготь',
                        price: 500
                    },
                    {
                        name: 'Покрытие гель-лаком френч один ноготьь',
                        price: 500
                    },
                    {
                        name: 'Покрытие лак фрэнч',
                        price: 1800
                    },
                    {
                        name: 'Снятие гель-лака',
                        price: 1700
                    },
                    {
                        name: 'Снятие лака',
                        price: 500
                    },
                ]
            },
            {
                serviceTitle: 'СПА уход',
                servicePrices: [
                    {
                        name: 'СПА-уход La Suitane de Saba',
                        price: 3300
                    },
                    {
                        name: 'СПА-уход Тальон',
                        price: 3300
                    },
                    {
                        name: 'Экспресс-уход Тальон',
                        price: 2200
                    },
                    {
                        name: 'Скраб для рук',
                        price: 1100
                    },{
                        name: 'Скраб для ног',
                        price: 1100
                    }
                ]
            },
        ]
    },
    {
        title: 'Косметология лицо',
        serviceCode: 4,
        slides: cosmetologyFace_slides,
        services:[
            {
                serviceTitle: 'Уходы BIOLOGIQUE RECHERCHE лицо',
                servicePrices: [
                    {
                        name: 'Персонализированный УХОД по состоянию кожи. Знакомство с Biologique Recherche',
                        price: 10900
                    },
                    {
                        name: 'Soin Biosensible. Уход для чувствительной кожи и для кожи, склонной к куперозу',
                        price: 12900
                    },
                    {
                        name: 'BR Soin LIFT CVS ЛИФТИНГ-УХОД',
                        price: 13800
                    },
                    {
                        name: 'BR Soin Restructurant LISSANT Разглаживающий и наполняющий уход',
                        price: 16800
                    },
                    {
                        name: 'BR Soin Masque Exfoliant P50 Visage. Обновляющий регенерирующий уход с маской Р50',
                        price: 16400
                    },
                    {
                        name: 'BR Soin Oxygenant. Оксигенирирующий уход VIP O2',
                        price: 13200
                    },
                    {
                        name: 'BR Soin Hydreclat. Увлажнение и сияние',
                        price: 11600
                    },
                    {
                        name: 'BR Soin MC 110 тонизирующий уход с МС-110',
                        price: 12400
                    },
                    {
                        name: 'BR SECONDE PEAU Уход "Вторая кожа"',
                        price: 39600
                    },
                    {
                        name: 'BR Soin Peeling aux Acides de Fruits Восстанавливающий уход на основе пилинга',
                        price: 13000
                    },
                    {
                        name: 'BR BIOLOGIQUE FEERIE. Преображение и омоложение (с маской Feerie для лица)',
                        price: 19100
                    },
                    {
                        name: 'BR BIOLOGIQUE FEERIE. Преображение и омоложение (с маской Feerie для лица и шеи)',
                        price: 20900
                    },{
                        name: 'BR Soin Sebo Reequilibrant. Себорегулирующий уход для кожи, склонной к акне',
                        price: 12100
                    },
                    {
                        name: 'BR Soin Relipidant. Питание и восстановление липидного барьера кожи',
                        price: 10200
                    },
                    {
                        name: 'BR Soin Taches Pigmentaires. Уход для кожи склонной к гиперпигментации',
                        price: 15800
                    },
                    {
                        name: 'NEW BR Soin TOLESKIN Успокаивающий уход для нетолерантных состояний кожи',
                        price: 19100
                    },
                    {
                        name: 'BR Soin Integral Face. Интегральный комплекс: лифтинг, увлажнение и сияние',
                        price: 16800
                    },{
                        name: 'BR Soin Cryo 3R. Комплексный уход 3R: обновление, регенерация, восстановление',
                        price: 18700
                    }
                ]
            },
            {
                serviceTitle: 'KOKO дополнительные услуги',
                servicePrices: [
                    {
                        name: 'Algen-Modelage Maske Моделирующая альгинатная маска',
                        price: 3300
                    },{
                        name: 'Aloe Vera-Extrakt Экстракт Алоэ',
                        price: 1000
                    },{
                        name: 'Anti-Falten Serum Омолаживающая сыворотка',
                        price: 2100
                    },{
                        name: 'Augengel plus Гель для кожи вокруг глаз',
                        price: 1300
                    },{
                        name: 'Basis-Modelage',
                        price: 1500
                    },
                    {
                        name: 'Boswellia-Nanopartikel Экстракт ладана в наночастицах',
                        price: 1000
                    },{
                        name: 'CM-Glukan-Komplex КМ-глюкан комплекс',
                        price: 1000
                    },{
                        name: 'Coffein liposomen Кофеин в липосомах',
                        price: 1000
                    },{
                        name: 'D-Pantenol Д-Пантенол',
                        price: 1000
                    },{
                        name: 'DMS Basis creme Базисный крем',
                        price: 900
                    },
                    {
                        name: 'DMS-Maske Vitaminen',
                        price: 2400
                    },{
                        name: 'DMS-Peelingcreme Пилинг крем',
                        price: 2000
                    },{
                        name: 'Echinacea-Extrakt Экстракт эхинацеи',
                        price: 1600
                    },{
                        name: 'Enzym-Peeling Mask',
                        price: 2800
                    },{
                        name: 'Gesichts-Tonic Тоник для лица',
                        price: 1000
                    },
                    {
                        name: 'Getonte Tages creme "е" Тональный дневной крем',
                        price: 1600
                    },{
                        name: 'Gruner Tee-Extrakt Экстракт зеленого чая',
                        price: 1700
                    },{
                        name: 'Hagebuttenkern-OL Масло семян дикой розы',
                        price: 1000
                    },{
                        name: 'Hamamelis-Extrakt Экстракт гамамелиса',
                        price: 1700
                    },{
                        name: 'Hyaluronsaure-Konzentrat Гиалуроновая кислота',
                        price: 1600
                    },
                    {
                        name: 'Hyaluronsaure-Liposomen Plus Гиалуроновая кислота в липосомах',
                        price: 2500
                    },{
                        name: 'Jojoba Ol Масло жожоба',
                        price: 600
                    },{
                        name: 'Kigelia-Liposomen Konzentrat Сыворотка с экстрактом кигелии',
                        price: 2500
                    },{
                        name: 'Korpercreme',
                        price: 1000
                    },{
                        name: 'Laminaria liposomen serum',
                        price: 2000
                    }
                ]
            },
            {
                serviceTitle: 'Дополнительные услуги Biologique Recherche',
                servicePrices: [
                    {
                        name: 'BR Masque Biosensible, 10 мл',
                        price: 2800
                    },{
                        name: 'BR Emulsion Gel Biosensible 3 мл',
                        price: 1500
                    },{
                        name: 'BR Silk Plus 1 мл',
                        price: 1500
                    },{
                        name: 'BR RHR Grand Millesime Гранд миллезим, 1 мл',
                        price: 1500
                    },{
                        name: 'BR Lotion MC №1 + Fluid VIP O2 Лосьон МС 110 №1 + фл',
                        price: 1500
                    },
                    {
                        name: 'BR Сыворотки по типу кожи 1 мл',
                        price: 1300
                    },{
                        name: 'BR Masque Biologique Feerie, 1*60мл',
                        price: 6500
                    },
                    {
                        name: 'BR Masque Biomagic Mask Маска "Биомагия" 20 г',
                        price: 2800
                    },{
                        name: 'BR Masque VIP O2 Маска "Оксигенант VIP O2" 20 г',
                        price: 2800
                    },
                    {
                        name: 'BR Masque Visolastine E Маска "Визоластин Е Эмбриона"',
                        price: 3100
                    },{
                        name: 'BR Masque "Collagen Caviar"',
                        price: 5000
                    },
                    {
                        name: 'BR Gel D`Algues / Гель из водорослей для тела 10 мл',
                        price: 2000
                    },{
                        name: 'BR Masque Creme Biofixine Крем-маска Biofixine 10 гр',
                        price: 5100
                    },{
                        name: 'BR Masque Exfoliante P-50 Маска P50, 1 шт * 7 мл',
                        price: 4000
                    },{
                        name: 'BR Lotion MC 110 Интенсивная обработка лица лосьоном MC 110, 8 мл',
                        price: 3900
                    },{
                        name: 'BR Masque "Collagen Caviar" / Маска с вытяжкой из икры, 1 шт',
                        price: 6500
                    },
                    {
                        name: 'BR Cold Mask / Маска-пудра морская холодная 20 гр',
                        price: 3600
                    },{
                        name: 'BR Masque Bio-Vecteur / Маска Биовектор, 1 лист',
                        price: 3300
                    },{
                        name: 'BR Creme Masque Vernix Крем-маска Верникс, 10 мл',
                        price: 3900
                    },{
                        name: 'BR Masque E-Vital Glance Contour des yeux au Collagene / Маска для глаз, 1 шт',
                        price: 4800
                    },{
                        name: 'BR Masque Vivant балансирующий Тонус, 20 мл',
                        price: 2500
                    }
                ]
            },
            {
                serviceTitle: 'QMS',
                servicePrices: [
                    {
                        name: 'Восстанавливающая процедура для атоничной кожи',
                        price: 20600
                    },{
                        name: 'Экзосомальная процедура активной стимуляции эластина',
                        price: 20600
                    },{
                        name: 'Экспресс Уход за лицом QMS',
                        price: 11600
                    },{
                        name: 'Драгоценный коллагеновый уход+Массаж',
                        price: 22600
                    },{
                        name: 'Драгоценный коллагеновый уход',
                        price: 17100
                    }
                ]
            },
            {
                serviceTitle: 'KOKO',
                servicePrices: [
                    {
                        name: 'Массаж по гелю с сыворотками Коко NEW',
                        price: 14000
                    },{
                        name: 'Осветляющая Программа Коко NEW',
                        price: 17600
                    },{
                        name: 'Противовоспалительная Процедура с Чисткой Коко NEW',
                        price: 14000
                    },{
                        name: 'Уход Anti-age Корнеотерапия Коко NEW',
                        price: 17600
                    }
                ]
            },
            {
                serviceTitle: 'Аппаратные техники с Remodeling Face / МЕЗО ЛИФТ от Biologique Recherche',
                servicePrices: [
                    {
                        name: 'BR Уход TRIPLE LIFT (Lift CVS + Lissant + Remodeling Face + Coctel d\'Actifs Regenerants)',
                        price: 34900
                    },
                    {
                        name: 'BR Soin Mentonniere. Четкий контур: уход для лица и шеи с Mentonniere',
                        price: 24700
                    },
                    {
                        name: 'BR Аппарат Remodeling Face 20 мин',
                        price: 5000
                    },
                    {
                        name: 'Скульптурный массаж лица + ментоньеры',
                        price: 21700
                    }
                ]
            },
            {
                serviceTitle: 'Омоложение на основе Японской косметики',
                servicePrices: [
                    {
                        name: 'Омоложение на основе Золотой маски 24К. Gold',
                        price: 24200
                    },{
                        name: 'Омоложение на основе кометики La Cerarl',
                        price: 20600
                    },{
                        name: '«Лёд и пламя» LAPIDEM',
                        price: 27500
                    },{
                        name: 'Восстановление и уход .СПИКУЛЫ. LAPIDEM',
                        price: 20400
                    },{
                        name: 'Восстановление регенерации клеток с коллагеном LAPIDEM',
                        price: 27500
                    }
                ]
            },
            {
                serviceTitle: 'Дерматологический пилинг',
                servicePrices: [
                    {
                        name: 'PQ AGE пилинг',
                        price: 18200
                    },{
                        name: 'Pink intime system пилинг',
                        price: 18200
                    },{
                        name: 'PRX-T33, лицо',
                        price: 12100
                    },{
                        name: 'PRX-T33, лицо+шея',
                        price: 14300
                    },{
                        name: 'PRX-T33, лицо+шея+декольте',
                        price: 19400
                    }
                ]
            }
        ]
    },
    {
        title: 'Косметология тело',
        serviceCode: 5,
        slides: cosmetologyBody_slides,
        services:[
            {
                serviceTitle: 'Основные уходы BIOLOGIQUE RECHERCHE тело',
                servicePrices: [
                    {
                        name: 'NEW BR SOIN P50 PEAU NEUVE (GOMMAGE) Деликатно отшелушивающий и увлажняющий уход с Gommage P50',
                        price: 6400
                    },
                    {
                        name: 'NEW BR SOIN MINCEUR AUX ALGUES Детоксифицирующий антицеллюлитный уход для тела с GEL D ALGUES',
                        price: 13200
                    },
                    {
                        name: 'NEW BR SOIN MINCEUR AUX ALGUES Детоксифицирующий дренирующий антицеллюлитный уход для тела с GEL D ALGUES',
                        price: 13200
                    },
                    {
                        name: 'NEW BR SOIN BOOSTER MINCEUR Липолитический дренирующий уход с бустером BOOSTER MINCEUR',
                        price: 16000
                    },
                    {
                        name: 'NEW BR SOIN LIFT CORPS Лифтинг уход для тела с бустером LIFT CORPS',
                        price: 17200
                    },
                    {
                        name: 'NEW BR SOIN JAMBES LEGERS Уход легкие ноги',
                        price: 5500
                    },
                    {
                        name: 'NEW BR SOIN MASSAGE Персонализированный массаж для тела',
                        price: 13500
                    },
                    {
                        name: 'NEW BR SOIN MINCEUR HE Уход для тела с эфирными маслами',
                        price: 0
                    }
                ]
            },
            {
                serviceTitle: 'Дополнительные услуги BIOLOGIQUE RECHERCHE Тело',
                servicePrices: [
                    {
                        name: 'BR Lotion MC 110, 10 мл',
                        price: 1600
                    },
                    {
                        name: 'BR Lotion P50 Corps, 50 мл',
                        price: 900
                    },
                    {
                        name: 'BR Huile Sous-ombilicale / Моделирующее масло для тела, 10 мл',
                        price: 2500
                    },
                    {
                        name: 'BR Huile Jambes Lourdes / Расслабляющий комплекс масел для ног, 10 мл',
                        price: 1600
                    },{
                        name: 'BR Комплекс "Анти-А", 10 мл',
                        price: 1600
                    },
                    {
                        name: 'BR Gel D\'Algues / Гель из водорослей для тела, 20 мл',
                        price: 800
                    },
                    {
                        name: 'BR Creme Defatigante Крем Дефатигант, 10 мл',
                        price: 800
                    },
                    {
                        name: 'BR Serum Matriciel / Подтягивающая тонизирующая сыворотка для тела, 5 мл',
                        price: 1600
                    },
                    {
                        name: 'BR Creme Repatrice / Восстанавливающий крем для тела и груди, 10 мл',
                        price: 1400
                    },
                    {
                        name: 'BR Крем MSR-H Corps, 10 мл',
                        price: 2600
                    },
                    {
                        name: 'BR Creme DERMO-RL Corps / Увлажняющий восстанавливающий крем для тела с липидами, 10 мл',
                        price: 2500
                    }
                ]
            },
            {
                serviceTitle: 'H.Q.B.M. Ингибитор для тела',
                servicePrices: [
                    {
                        name: 'H.Q.B.M. Ингибитор для тела',
                        price: 2800
                    },{
                        name: 'Обертывание HQBM',
                        price: 5000
                    }
                ]
            },
            {
                serviceTitle: 'Уход THALION',
                servicePrices: [
                    {
                        name: 'Водорослевое обертывание утончение (жидкое)',
                        price: 14200
                    },{
                        name: 'Интенсивная Ревитализация',
                        price: 14000
                    },{
                        name: 'Маска Воск Рескульптор Обертывание',
                        price: 5800
                    },{
                        name: 'Обертывание морское первичное',
                        price: 13200
                    },{
                        name: 'Обертывание морской кальций',
                        price: 14200
                    },
                    {
                        name: 'Обертывание Три-Актив',
                        price: 14100
                    },
                    {
                        name: 'Обертывание 3D Целлюлит Контроль',
                        price: 15600
                    },
                    {
                        name: 'Обертывание гармонизирующее',
                        price: 13200
                    },
                    {
                        name: 'Обертывание Ламинария Интенсивное Утончение',
                        price: 15600
                    },
                    {
                        name: 'Обертывание минеральное "Бу Марин"',
                        price: 13200
                    },
                    {
                        name: 'Обертывание Морской Пелоид Геранды',
                        price: 13200
                    }
                ]
            }
        ]
    },
    {
        title: 'Врачебная косметология',
        serviceCode: 6,
        slides: cosmetologyMedical_slides,
        services:[
            {
                serviceTitle: 'Прием',
                servicePrices: [
                    {
                        name: 'Прием (осмотр, консультация) врача-косметолога первичный',
                        price: 4000
                    }
                ]
            },
            {
                serviceTitle: 'Программы с использованием аппарата Endosphere',
                servicePrices: [
                    {
                        name: 'Вакуумный массаж кожи (тело)',
                        price: 8400
                    },
                    {
                        name: 'Вакуумный массаж кожи (Лицо+шея+декольте)',
                        price: 7000
                    }
                ]
            },
            {
                serviceTitle: 'Прессотерапия',
                servicePrices: [
                    {
                        name: 'Баровоздействие-прессотерапия конечностей, пневмокомпрессия',
                        price: 2700
                    }
                ]
            },
            {
                serviceTitle: 'Программы с использованием аппарата Geneo + Воздействие токами ультравысокой частоты на кожу',
                servicePrices: [
                    {
                        name: 'Программа оксигенации «Золото Glam»',
                        price: 16700
                    },{
                        name: 'Программа оксигениции «Омоложение и осветление» (90 мин)',
                        price: 16700
                    },{
                        name: 'Программа оксигениции «Омоложение и увлажнение» (90 мин)',
                        price: 16700
                    },{
                        name: 'Программа оксигениции «Омоложение и осветление» (45 мин)',
                        price: 11300
                    },{
                        name: 'Программа оксигениции «Омоложение и увлажнение» (45 мин)',
                        price: 11300
                    },{
                        name: 'Программа Tripollar RF-терапия (20 мин)',
                        price: 6500
                    },{
                        name: 'Программа Tripollar RF-терапия (30 мин)',
                        price: 9200
                    },{
                        name: 'Программа сонофорез (УЗ введение веществ)',
                        price: 4300
                    },{
                        name: 'Программа массаж (Neo massage)',
                        price: 3000
                    }
                ]
            },
            {
                serviceTitle: 'Программы с использованием аппарата HydraFaсial (Вакуумный массаж кожи)',
                servicePrices: [
                    {
                        name: 'Чистка базовая',
                        price: 11900
                    },
                    {
                        name: 'Перед выходом в свет',
                        price: 14000
                    },
                    {
                        name: 'Для мужчин',
                        price: 14000
                    },
                    {
                        name: 'Глубокое очищение и обновление',
                        price: 14000
                    },{
                        name: 'Полчаса до идеала',
                        price: 14000
                    },
                    {
                        name: 'Для сухой и обезвоженной кожи',
                        price: 14000
                    },
                    {
                        name: 'Революционное омоложение',
                        price: 14600
                    },
                    {
                        name: 'Лечение пигментации',
                        price: 14000
                    },
                    {
                        name: 'Лечение проблемной кожи',
                        price: 14000
                    }
                ]
            },
            {
                serviceTitle: 'Программы с использованием аппарата Dermadrop (Очищение кожи лица и шеи)',
                servicePrices: [
                    {
                        name: 'Коктейль антивозрастной Canaboost TDA 2 мл',
                        price: 14600
                    },
                    {
                        name: 'Коктейль восстанавливающий DermaCool 2 мл',
                        price: 10500
                    },
                    {
                        name: 'Коктейль выравнивающий тон кожи Polar TDA 2 мл',
                        price: 10500
                    },
                    {
                        name: 'Коктейль для проблемной кожи Proderm TDA 2 мл',
                        price: 8900
                    },{
                        name: 'Коктейль из низко-и среднемолекулярной гиалуроновых кислот Hyal N10 TDA 2 мл',
                        price: 10500
                    }
                ]
            },
            {
                serviceTitle: 'Программы с использованием аппарата LightSheerDuet (Эпиляция)',
                servicePrices: [
                    {
                        name: 'Зона над верхней губой',
                        price: 3500
                    },
                    {
                        name: 'Зона ушных раковин',
                        price: 3500
                    },
                    {
                        name: 'Зона бакенбард',
                        price: 3400
                    },
                    {
                        name: 'Зона височной области',
                        price: 5100
                    },{
                        name: 'Зона скул',
                        price: 3500
                    },
                    {
                        name: 'Зона области подбородка',
                        price: 3500
                    },
                    {
                        name: 'Зона овала лица',
                        price: 6900
                    },
                    {
                        name: 'Зона области подмышек',
                        price: 8400
                    },
                ]
            },
            {
                serviceTitle: 'Программы с использованием аппарата Venusian (карбокситерапия) Подкожное введение лекарств',
                servicePrices: [
                    {
                        name: 'Программа для лица «интенсивное омоложение» (лицо. шея. декольте)',
                        price: 14100
                    },
                    {
                        name: 'Программа для лица «интенсивное омоложение» (лицо)',
                        price: 9100
                    },
                    {
                        name: 'Программа лечения «проблемной кожи»',
                        price: 14200
                    },
                    {
                        name: 'Программа для тела «антицеллюлитная»',
                        price: 26900
                    },{
                        name: 'Программа для тела «одна зона»',
                        price: 6500
                    }
                ]
            },
            {
                serviceTitle: 'Дерматологический пилинг',
                servicePrices: [
                    {
                        name: 'PQ AGE пилинг',
                        price: 18200
                    },
                    {
                        name: 'Pink intime system пилинг',
                        price: 18200
                    },
                    {
                        name: 'PRX-T33, лицо',
                        price: 12100
                    },
                    {
                        name: 'PRX-T33, лицо+шея',
                        price: 14300
                    },{
                        name: 'PRX-T33, лицо+шея+декольте',
                        price: 19400
                    }
                ]
            },
            {
                serviceTitle: 'Лазерная шлифовка кожи (аппарат Harmony XL)',
                servicePrices: [
                    {
                        name: 'Омоложение ClearLift –участок 1 см2',
                        price: 2700
                    },
                    {
                        name: 'Омоложение ClearLift-лицо',
                        price: 24000
                    },
                    {
                        name: 'Омоложение ClearLift-шея',
                        price: 15400
                    },
                    {
                        name: 'Омоложение ClearLift-декольте',
                        price: 17900
                    },{
                        name: 'Омоложение ClearLift-лицо+шея',
                        price: 34700
                    }
                    ,{
                        name: 'Омоложение ClearLift-шея+декольте',
                        price: 29200
                    }
                    ,{
                        name: 'Омоложение ClearLift-лицо+шея+декольте',
                        price: 45600
                    }
                    ,{
                        name: 'Омоложение ClearLift-кисти рук',
                        price: 15400
                    }
                ]
            },
            {
                serviceTitle: 'Фототерапия кожи (аппарат Harmony XL)',
                servicePrices: [
                    {
                        name: '4Д-омоложение (лицо, шея, декольте)',
                        price: 45100
                    },
                    {
                        name: '4Д-омоложение верхняя часть туловища/нижняя часть туловища',
                        price: 67100
                    },
                    {
                        name: '4Д-омоложение (шея, декольте)',
                        price: 38500
                    },
                    {
                        name: '4Д-омоложение (декольте)',
                        price: 28600
                    },{
                        name: '4Д-омоложение (шея)',
                        price: 22000
                    }
                ]
            },
            {
                serviceTitle: 'Лазерная шлифовка кожи',
                servicePrices: [
                    {
                        name: 'Карбоновый пилинг',
                        price: 12900
                    },
                    {
                        name: 'Удаление татуировки 1 см2 (от 1 см2 до 4 см2)',
                        price: 3900
                    },
                    {
                        name: 'Удаление татуировки 1 см2 (от 5 см2 до 20 см2)',
                        price: 7700
                    },
                    {
                        name: 'Удаление татуажа 2 бровей',
                        price: 8500
                    },{
                        name: 'Удаление пигментации 1 см2',
                        price: 2000
                    }
                ]
            },
            {
                serviceTitle: 'Фототерапия кожи',
                servicePrices: [
                    {
                        name: 'Фотоомоложение',
                        price: 21800
                    },
                    {
                        name: 'Лицо',
                        price: 19300
                    },
                    {
                        name: 'Лицо+ шея',
                        price: 25800
                    },
                    {
                        name: 'Шея',
                        price: 11600
                    },{
                        name: 'Декольте',
                        price: 18100
                    },
                    {
                        name: 'Лицо+шея+декольте',
                        price: 38500
                    },
                    {
                        name: 'Лоб',
                        price: 9100
                    },
                    {
                        name: 'Щеки',
                        price: 9100
                    },
                ]
            },
            {
                serviceTitle: 'Удаление сосудов на лице',
                servicePrices: [
                    {
                        name: '1 импульс',
                        price: 1400
                    },
                    {
                        name: 'Фототерапия сосудистых образований (лицо полностью)',
                        price: 18300
                    },
                    {
                        name: 'Фототерапия сосудистых образований (нос)',
                        price: 5900
                    },
                    {
                        name: 'Фототерапия сосудистых образований (подбородок)',
                        price: 4700
                    },{
                        name: 'Фототерапия сосудистых образований (лоб)',
                        price: 6500
                    }
                ]
            },
            {
                serviceTitle: 'Удаление сосудов на теле',
                servicePrices: [
                    {
                        name: '1 импульс',
                        price: 700
                    },
                    {
                        name: 'Площадь 1*1 см',
                        price: 5900
                    },
                    {
                        name: 'Площадь 5*5 см',
                        price: 18700
                    }
                ]
            }
        ]
    },
    {
        title: 'Массаж',
        serviceCode: 7,
        slides: massage_slides,
        services:[
            {
                serviceTitle: 'Массаж лица',
                servicePrices: [
                    {
                        name: 'Массаж лица (доп. услуга в процедуре ухода) (20 мин)',
                        price: 3300
                    },
                    {
                        name: 'Миопластический массаж лица по методике Сергея Щуревича (60 мин)',
                        price: 8800
                    },
                    {
                        name: 'Скульптурный Глуботканный массаж лица (60 мин)',
                        price: 7700
                    },
                    {
                        name: 'Хиромассаж лица (60 мин)',
                        price: 6600
                    }
                ]
            },
            {
                serviceTitle: 'Массаж тела',
                servicePrices: [
                    {
                        name: 'Массаж локальный 30 мин',
                        price: 4500
                    },
                    {
                        name: 'Массаж общий медицинский 60 мин',
                        price: 8800
                    },
                    {
                        name: 'Массаж общий медицинский 90 мин',
                        price: 12100
                    },
                    {
                        name: 'Массаж по авторской методике (60 мин)',
                        price: 7700
                    }
                ]
            },
            {
                serviceTitle: 'Спа-процедуры с кедровой бочкой',
                servicePrices: [
                    {
                        name: 'Кедровая бочка (60 мин)',
                        price: 2400
                    },{
                        name: 'Процедура в ИФ-сауне (30 мин)',
                        price: 2200
                    }
                ]
            }
        ]
    },
    {
        title: 'Эпиляция',
        serviceCode: 8,
        slides: epilation_slides,
        services:[
            {
                serviceTitle: 'Женская лазерная эпиляция LightSheerDuet',
                servicePrices: [
                    {
                        name: 'Зона над верхней губой',
                        price: 2000
                    },
                    {
                        name: 'Зона бакенбард',
                        price: 2000
                    },
                    {
                        name: 'Зона височной области',
                        price: 3000
                    },
                    {
                        name: 'Зона скул',
                        price: 2000
                    },
                    {
                        name: 'Зона область подбородка',
                        price: 2000
                    },
                    {
                        name: 'Зона овала лица',
                        price: 4000
                    },
                    {
                        name: 'Зона лица полностью',
                        price: 12000
                    },
                    {
                        name: 'Зона шеи (передняя поверхность)',
                        price: 3000
                    },
                    {
                        name: 'Зона шеи (задняя поверхность)',
                        price: 4000
                    },
                    {
                        name: 'Зона области подмышек',
                        price: 5000
                    },
                    {
                        name: 'Руки полностью (кисти, предплечья, плечи)',
                        price: 10000
                    },
                    {
                        name: 'Воротниковая зона',
                        price: 17000
                    },
                    {
                        name: 'Зона предплечий',
                        price: 6000
                    },
                    {
                        name: 'Зона плеч',
                        price: 6000
                    }
                ]
            },
            {
                serviceTitle: 'Мужская лазерная эпиляция LightSheerDuet',
                servicePrices: [
                    {
                        name: 'Зона бедер',
                        price: 13500
                    },
                    {
                        name: 'Зона голеней',
                        price: 12000
                    },
                    {
                        name: 'Зона коленей',
                        price: 2400
                    },
                    {
                        name: 'Зона тыла стоп',
                        price: 2400
                    },{
                        name: 'Зона пальцев ног',
                        price: 2400
                    },
                    {
                        name: 'Зона внутренней стороны бедер',
                        price: 7200
                    },
                    {
                        name: 'Зона бикини',
                        price: 10000
                    },
                    {
                        name: 'Зона бикини (глубокое)',
                        price: 12000
                    },
                    {
                        name: 'Зона ягодиц',
                        price: 10000
                    },{
                        name: 'Зона белой линии живота',
                        price: 2400
                    },
                    {
                        name: 'Зона живота',
                        price: 10000
                    },
                    {
                        name: 'Зона груди',
                        price: 8000
                    },
                    {
                        name: 'Зона ореола молочных желез',
                        price: 2400
                    },
                    {
                        name: 'Зона спины (до талии)',
                        price: 8400
                    },{
                        name: 'Зона шеи (передняя поверхность)',
                        price: 3600
                    }
                ]
            },
            {
                serviceTitle: 'Эпиляция Воск',
                servicePrices: [
                    {
                        name: 'Подготовка к эпиляции бикини / бритье триммером',
                        price: 800
                    },{
                        name: 'Эпиляция бедро',
                        price: 6500
                    },{
                        name: 'Эпиляция бикини глубокое',
                        price: 8500
                    },{
                        name: 'Эпиляция бикини классическое',
                        price: 6800
                    },{
                        name: 'Эпиляция верхняя губа',
                        price: 2600
                    },
                    {
                        name: 'Эпиляция голени',
                        price: 5300
                    },{
                        name: 'Эпиляция задняя поверхность шеи',
                        price: 3500
                    },{
                        name: 'Эпиляция краевая роста волос',
                        price: 5200
                    },{
                        name: 'Эпиляция лица частичная',
                        price: 2200
                    },{
                        name: 'Эпиляция нижней части живота',
                        price: 3300
                    }
                ]
            },
            {
                serviceTitle: 'Эпиляция сахарная',
                servicePrices: [
                    {
                        name: 'Эпиляция сахарная бедро',
                        price: 9900
                    },{
                        name: 'Эпиляция сахарная бикини глубокое',
                        price: 11900
                    },{
                        name: 'Эпиляция сахарная бикини классическое',
                        price: 10100
                    },{
                        name: 'Эпиляция сахарная верхняя губа',
                        price: 3900
                    },{
                        name: 'Эпиляция сахарная голени',
                        price: 9100
                    },
                    {
                        name: 'Эпиляция сахарная ног полностью',
                        price: 12100
                    },{
                        name: 'Эпиляция сахарная Лицо полностью',
                        price: 10700
                    },{
                        name: 'Эпиляция сахарная подмышечной впадины',
                        price: 6900
                    },{
                        name: 'Эпиляция сахарная рук до локтя',
                        price: 8400
                    },{
                        name: 'Эпиляция сахарная рук полностью',
                        price: 9900
                    }
                ]
            }
        ]
    }
];

export {priceList}