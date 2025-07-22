import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const categories = ['Все', 'Новинки', 'Акции', 'Популярные', 'Рекомендации'];
  
  const games = [
    {
      id: 1,
      title: 'Super Mario Odyssey',
      price: '3990 ₽',
      oldPrice: null,
      image: '/img/e63761f2-dc43-4ec4-a7dc-32c6615d87f6.jpg',
      rating: 5,
      category: 'Популярные',
      isNew: false,
      discount: null
    },
    {
      id: 2,
      title: 'The Legend of Zelda: Breath of the Wild',
      price: '2990 ₽',
      oldPrice: '4990 ₽',
      image: '/img/973aa69f-fbe8-48c9-b31c-a7252bfd0bdc.jpg',
      rating: 5,
      category: 'Акции',
      isNew: false,
      discount: 40
    },
    {
      id: 3,
      title: 'Animal Crossing: New Horizons',
      price: '3490 ₽',
      oldPrice: null,
      image: '/img/e63761f2-dc43-4ec4-a7dc-32c6615d87f6.jpg',
      rating: 4,
      category: 'Рекомендации',
      isNew: true,
      discount: null
    },
    {
      id: 4,
      title: 'Mario Kart 8 Deluxe',
      price: '3590 ₽',
      oldPrice: null,
      image: '/img/973aa69f-fbe8-48c9-b31c-a7252bfd0bdc.jpg',
      rating: 5,
      category: 'Популярные',
      isNew: false,
      discount: null
    },
    {
      id: 5,
      title: 'Pokémon Legends: Arceus',
      price: '2790 ₽',
      oldPrice: '3990 ₽',
      image: '/img/e63761f2-dc43-4ec4-a7dc-32c6615d87f6.jpg',
      rating: 4,
      category: 'Акции',
      isNew: false,
      discount: 30
    },
    {
      id: 6,
      title: 'Metroid Dread',
      price: '3290 ₽',
      oldPrice: null,
      image: '/img/973aa69f-fbe8-48c9-b31c-a7252bfd0bdc.jpg',
      rating: 5,
      category: 'Новинки',
      isNew: true,
      discount: null
    }
  ];

  const filteredGames = selectedCategory === 'Все' 
    ? games 
    : games.filter(game => game.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-nintendo-blue/10 to-nintendo-red/10">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-nintendo-red">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold text-nintendo-gray">
                🎮 Nintendo Switch Store
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-nintendo-gray hover:text-nintendo-red font-medium">Главная</a>
              <a href="#" className="text-nintendo-gray hover:text-nintendo-red font-medium">Каталог</a>
              <a href="#" className="text-nintendo-gray hover:text-nintendo-red font-medium">Новинки</a>
              <a href="#" className="text-nintendo-gray hover:text-nintendo-red font-medium">Акции</a>
              <a href="#" className="text-nintendo-gray hover:text-nintendo-red font-medium">Контакты</a>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="Search" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ShoppingCart" size={16} />
                <span className="ml-1">0</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-nintendo-red to-nintendo-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">
                Игровой мир Nintendo Switch
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Откройте безграничные возможности игр с персональными рекомендациями
              </p>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-nintendo-red hover:bg-gray-100">
                  <Icon name="GameController" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nintendo-red">
                  Смотреть каталог
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/img/ce941f92-4f97-44c6-95fe-4ac2b84184ea.jpg" 
                alt="Nintendo Switch" 
                className="w-full h-auto rounded-lg shadow-2xl animate-scale-in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category 
                    ? "bg-nintendo-red text-white" 
                    : "border-nintendo-red text-nintendo-red hover:bg-nintendo-red hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Персональные рекомендации */}
      <section className="py-12 bg-gradient-to-r from-nintendo-yellow/10 to-nintendo-green/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-nintendo-gray mb-2">
              <Icon name="Star" size={28} className="inline mr-2 text-nintendo-yellow" />
              Персональные рекомендации
            </h2>
            <p className="text-gray-600">Игры, подобранные специально для вас</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-nintendo-gray">Ваш игровой профиль</h3>
              <Badge variant="secondary" className="bg-nintendo-green text-white">Активный игрок</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-nintendo-blue/10 rounded-lg">
                <div className="text-2xl font-bold text-nintendo-blue">42</div>
                <div className="text-sm text-gray-600">Игр в библиотеке</div>
              </div>
              <div className="p-4 bg-nintendo-red/10 rounded-lg">
                <div className="text-2xl font-bold text-nintendo-red">156ч</div>
                <div className="text-sm text-gray-600">Времени в играх</div>
              </div>
              <div className="p-4 bg-nintendo-green/10 rounded-lg">
                <div className="text-2xl font-bold text-nintendo-green">Приключения</div>
                <div className="text-sm text-gray-600">Любимый жанр</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Catalog */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-nintendo-gray mb-8 text-center">
            {selectedCategory === 'Все' ? 'Каталог игр' : selectedCategory}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game) => (
              <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-2 hover:border-nintendo-red/20">
                <div className="relative">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover"
                  />
                  {game.isNew && (
                    <Badge className="absolute top-2 left-2 bg-nintendo-green text-white">
                      Новинка
                    </Badge>
                  )}
                  {game.discount && (
                    <Badge className="absolute top-2 right-2 bg-nintendo-red text-white">
                      -{game.discount}%
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-nintendo-gray">{game.title}</CardTitle>
                  <div className="flex items-center">
                    {Array.from({length: game.rating}).map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-nintendo-yellow fill-current" />
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-nintendo-red">{game.price}</div>
                      {game.oldPrice && (
                        <div className="text-sm text-gray-500 line-through">{game.oldPrice}</div>
                      )}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <div className="flex space-x-2 w-full">
                    <Button className="flex-1 bg-nintendo-red hover:bg-nintendo-red/90">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="sm">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 bg-gradient-to-r from-nintendo-red to-nintendo-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Специальные предложения</h2>
          <p className="text-xl mb-8 opacity-90">Не пропустите лучшие скидки на популярные игры!</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Скидки до 50%</h3>
              <p className="mb-4">На избранные игры Nintendo</p>
              <Button className="bg-white text-nintendo-red hover:bg-gray-100">
                Смотреть все
              </Button>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Новые поступления</h3>
              <p className="mb-4">Каждую неделю новые игры</p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nintendo-red">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nintendo-gray text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Nintendo Switch Store</h3>
              <p className="text-gray-300">Ваш лучший источник игр для Nintendo Switch</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <div className="text-gray-300 space-y-2">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (800) 123-45-67
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@nintendo-store.ru
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-white hover:text-nintendo-red">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-nintendo-red">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-white hover:text-nintendo-red">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;