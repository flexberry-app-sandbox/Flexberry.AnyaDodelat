import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-anya-dodelat-визит-l');
  this.route('i-i-s-anya-dodelat-визит-e',
  { path: 'i-i-s-anya-dodelat-визит-e/:id' });
  this.route('i-i-s-anya-dodelat-визит-e.new',
  { path: 'i-i-s-anya-dodelat-визит-e/new' });
  this.route('i-i-s-anya-dodelat-график-работы-l');
  this.route('i-i-s-anya-dodelat-график-работы-e',
  { path: 'i-i-s-anya-dodelat-график-работы-e/:id' });
  this.route('i-i-s-anya-dodelat-график-работы-e.new',
  { path: 'i-i-s-anya-dodelat-график-работы-e/new' });
  this.route('i-i-s-anya-dodelat-должности-l');
  this.route('i-i-s-anya-dodelat-должности-e',
  { path: 'i-i-s-anya-dodelat-должности-e/:id' });
  this.route('i-i-s-anya-dodelat-должности-e.new',
  { path: 'i-i-s-anya-dodelat-должности-e/new' });
  this.route('i-i-s-anya-dodelat-клиент-l');
  this.route('i-i-s-anya-dodelat-клиент-e',
  { path: 'i-i-s-anya-dodelat-клиент-e/:id' });
  this.route('i-i-s-anya-dodelat-клиент-e.new',
  { path: 'i-i-s-anya-dodelat-клиент-e/new' });
  this.route('i-i-s-anya-dodelat-отсутствие-l');
  this.route('i-i-s-anya-dodelat-отсутствие-e',
  { path: 'i-i-s-anya-dodelat-отсутствие-e/:id' });
  this.route('i-i-s-anya-dodelat-отсутствие-e.new',
  { path: 'i-i-s-anya-dodelat-отсутствие-e/new' });
  this.route('i-i-s-anya-dodelat-производитель-l');
  this.route('i-i-s-anya-dodelat-производитель-e',
  { path: 'i-i-s-anya-dodelat-производитель-e/:id' });
  this.route('i-i-s-anya-dodelat-производитель-e.new',
  { path: 'i-i-s-anya-dodelat-производитель-e/new' });
  this.route('i-i-s-anya-dodelat-сотрудник-l');
  this.route('i-i-s-anya-dodelat-сотрудник-e',
  { path: 'i-i-s-anya-dodelat-сотрудник-e/:id' });
  this.route('i-i-s-anya-dodelat-сотрудник-e.new',
  { path: 'i-i-s-anya-dodelat-сотрудник-e/new' });
  this.route('i-i-s-anya-dodelat-табель-смены-l');
  this.route('i-i-s-anya-dodelat-табель-смены-e',
  { path: 'i-i-s-anya-dodelat-табель-смены-e/:id' });
  this.route('i-i-s-anya-dodelat-табель-смены-e.new',
  { path: 'i-i-s-anya-dodelat-табель-смены-e/new' });
  this.route('i-i-s-anya-dodelat-товар-l');
  this.route('i-i-s-anya-dodelat-товар-e',
  { path: 'i-i-s-anya-dodelat-товар-e/:id' });
  this.route('i-i-s-anya-dodelat-товар-e.new',
  { path: 'i-i-s-anya-dodelat-товар-e/new' });
  this.route('i-i-s-anya-dodelat-услуга-l');
  this.route('i-i-s-anya-dodelat-услуга-e',
  { path: 'i-i-s-anya-dodelat-услуга-e/:id' });
  this.route('i-i-s-anya-dodelat-услуга-e.new',
  { path: 'i-i-s-anya-dodelat-услуга-e/new' });
});

export default Router;
