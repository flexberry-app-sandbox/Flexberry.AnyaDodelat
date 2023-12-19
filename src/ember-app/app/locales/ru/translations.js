import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISAnyaDodelatВизитLForm from './forms/i-i-s-anya-dodelat-визит-l';
import IISAnyaDodelatГрафикРаботыLForm from './forms/i-i-s-anya-dodelat-график-работы-l';
import IISAnyaDodelatДолжностиLForm from './forms/i-i-s-anya-dodelat-должности-l';
import IISAnyaDodelatКлиентLForm from './forms/i-i-s-anya-dodelat-клиент-l';
import IISAnyaDodelatОтсутствиеLForm from './forms/i-i-s-anya-dodelat-отсутствие-l';
import IISAnyaDodelatПроизводительLForm from './forms/i-i-s-anya-dodelat-производитель-l';
import IISAnyaDodelatсотрудникLForm from './forms/i-i-s-anya-dodelat-сотрудник-l';
import IISAnyaDodelatТабельСменыLForm from './forms/i-i-s-anya-dodelat-табель-смены-l';
import IISAnyaDodelatТоварLForm from './forms/i-i-s-anya-dodelat-товар-l';
import IISAnyaDodelatУслугаLForm from './forms/i-i-s-anya-dodelat-услуга-l';
import IISAnyaDodelatВизитEForm from './forms/i-i-s-anya-dodelat-визит-e';
import IISAnyaDodelatГрафикРаботыEForm from './forms/i-i-s-anya-dodelat-график-работы-e';
import IISAnyaDodelatДолжностиEForm from './forms/i-i-s-anya-dodelat-должности-e';
import IISAnyaDodelatКлиентEForm from './forms/i-i-s-anya-dodelat-клиент-e';
import IISAnyaDodelatОтсутствиеEForm from './forms/i-i-s-anya-dodelat-отсутствие-e';
import IISAnyaDodelatПроизводительEForm from './forms/i-i-s-anya-dodelat-производитель-e';
import IISAnyaDodelatсотрудникEForm from './forms/i-i-s-anya-dodelat-сотрудник-e';
import IISAnyaDodelatТабельСменыEForm from './forms/i-i-s-anya-dodelat-табель-смены-e';
import IISAnyaDodelatТоварEForm from './forms/i-i-s-anya-dodelat-товар-e';
import IISAnyaDodelatУслугаEForm from './forms/i-i-s-anya-dodelat-услуга-e';
import IISAnyaDodelatВизитModel from './models/i-i-s-anya-dodelat-визит';
import IISAnyaDodelatГрафикРаботыModel from './models/i-i-s-anya-dodelat-график-работы';
import IISAnyaDodelatДолжностиModel from './models/i-i-s-anya-dodelat-должности';
import IISAnyaDodelatЗаписьВизитаModel from './models/i-i-s-anya-dodelat-запись-визита';
import IISAnyaDodelatКлиентModel from './models/i-i-s-anya-dodelat-клиент';
import IISAnyaDodelatОтсутствиеModel from './models/i-i-s-anya-dodelat-отсутствие';
import IISAnyaDodelatПроизводительModel from './models/i-i-s-anya-dodelat-производитель';
import IISAnyaDodelatСоставУслугиModel from './models/i-i-s-anya-dodelat-состав-услуги';
import IISAnyaDodelatсотрудникModel from './models/i-i-s-anya-dodelat-сотрудник';
import IISAnyaDodelatТабельСменыModel from './models/i-i-s-anya-dodelat-табель-смены';
import IISAnyaDodelatТоварModel from './models/i-i-s-anya-dodelat-товар';
import IISAnyaDodelatУслугаModel from './models/i-i-s-anya-dodelat-услуга';
import IISAnyaDodelatУслугиМастераModel from './models/i-i-s-anya-dodelat-услуги-мастера';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-anya-dodelat-визит': IISAnyaDodelatВизитModel,
    'i-i-s-anya-dodelat-график-работы': IISAnyaDodelatГрафикРаботыModel,
    'i-i-s-anya-dodelat-должности': IISAnyaDodelatДолжностиModel,
    'i-i-s-anya-dodelat-запись-визита': IISAnyaDodelatЗаписьВизитаModel,
    'i-i-s-anya-dodelat-клиент': IISAnyaDodelatКлиентModel,
    'i-i-s-anya-dodelat-отсутствие': IISAnyaDodelatОтсутствиеModel,
    'i-i-s-anya-dodelat-производитель': IISAnyaDodelatПроизводительModel,
    'i-i-s-anya-dodelat-состав-услуги': IISAnyaDodelatСоставУслугиModel,
    'i-i-s-anya-dodelat-сотрудник': IISAnyaDodelatсотрудникModel,
    'i-i-s-anya-dodelat-табель-смены': IISAnyaDodelatТабельСменыModel,
    'i-i-s-anya-dodelat-товар': IISAnyaDodelatТоварModel,
    'i-i-s-anya-dodelat-услуга': IISAnyaDodelatУслугаModel,
    'i-i-s-anya-dodelat-услуги-мастера': IISAnyaDodelatУслугиМастераModel
  },

  'application-name': 'Anya dodelat',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Anya dodelat',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Anya dodelat',
          title: 'Anya dodelat'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-anya-dodelat-сотрудник-l': {
            caption: 'сотрудник',
            title: 'Сотрудник'
          },
          'i-i-s-anya-dodelat-должности-l': {
            caption: 'Должности',
            title: 'Должности'
          }
        },
        'график-работы': {
          caption: 'График работы',
          title: 'График работы',
          'i-i-s-anya-dodelat-график-работы-l': {
            caption: 'ГрафикРаботы',
            title: 'График работы'
          },
          'i-i-s-anya-dodelat-табель-смены-l': {
            caption: 'ТабельСмены',
            title: 'Табель смены'
          },
          'i-i-s-anya-dodelat-отсутствие-l': {
            caption: 'Отсутствие',
            title: 'Отсутствие'
          }
        },
        'справочник-товары': {
          caption: 'Справочник товары',
          title: 'Справочник товары',
          'i-i-s-anya-dodelat-товар-l': {
            caption: 'Товар',
            title: 'Товар'
          },
          'i-i-s-anya-dodelat-производитель-l': {
            caption: 'Производитель',
            title: 'Производитель'
          }
        },
        'запись-на-визит': {
          caption: 'Запись на визит',
          title: 'Запись на визит',
          'i-i-s-anya-dodelat-визит-l': {
            caption: 'Визит',
            title: 'Визит'
          }
        },
        услуги: {
          caption: 'Услуги',
          title: 'Услуги',
          'i-i-s-anya-dodelat-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        'наши-клиенты': {
          caption: 'Наши клиенты',
          title: 'Наши клиенты',
          'i-i-s-anya-dodelat-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        'anya-dodelat': {
          caption: 'AnyaDodelat',
          title: 'AnyaDodelat',
          'i-i-s-anya-dodelat-график-работы-l': {
            caption: 'График работы',
            title: ''
          },
          'i-i-s-anya-dodelat-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-anya-dodelat-табель-смены-l': {
            caption: 'Табель смены',
            title: ''
          },
          'i-i-s-anya-dodelat-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-anya-dodelat-отсутствие-l': {
            caption: 'Отсутствие',
            title: ''
          },
          'i-i-s-anya-dodelat-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-anya-dodelat-товар-l': {
            caption: 'Товар',
            title: ''
          },
          'i-i-s-anya-dodelat-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-anya-dodelat-визит-l': {
            caption: 'Визит',
            title: ''
          },
          'i-i-s-anya-dodelat-производитель-l': {
            caption: 'Производитель',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-anya-dodelat-визит-l': IISAnyaDodelatВизитLForm,
    'i-i-s-anya-dodelat-график-работы-l': IISAnyaDodelatГрафикРаботыLForm,
    'i-i-s-anya-dodelat-должности-l': IISAnyaDodelatДолжностиLForm,
    'i-i-s-anya-dodelat-клиент-l': IISAnyaDodelatКлиентLForm,
    'i-i-s-anya-dodelat-отсутствие-l': IISAnyaDodelatОтсутствиеLForm,
    'i-i-s-anya-dodelat-производитель-l': IISAnyaDodelatПроизводительLForm,
    'i-i-s-anya-dodelat-сотрудник-l': IISAnyaDodelatсотрудникLForm,
    'i-i-s-anya-dodelat-табель-смены-l': IISAnyaDodelatТабельСменыLForm,
    'i-i-s-anya-dodelat-товар-l': IISAnyaDodelatТоварLForm,
    'i-i-s-anya-dodelat-услуга-l': IISAnyaDodelatУслугаLForm,
    'i-i-s-anya-dodelat-визит-e': IISAnyaDodelatВизитEForm,
    'i-i-s-anya-dodelat-график-работы-e': IISAnyaDodelatГрафикРаботыEForm,
    'i-i-s-anya-dodelat-должности-e': IISAnyaDodelatДолжностиEForm,
    'i-i-s-anya-dodelat-клиент-e': IISAnyaDodelatКлиентEForm,
    'i-i-s-anya-dodelat-отсутствие-e': IISAnyaDodelatОтсутствиеEForm,
    'i-i-s-anya-dodelat-производитель-e': IISAnyaDodelatПроизводительEForm,
    'i-i-s-anya-dodelat-сотрудник-e': IISAnyaDodelatсотрудникEForm,
    'i-i-s-anya-dodelat-табель-смены-e': IISAnyaDodelatТабельСменыEForm,
    'i-i-s-anya-dodelat-товар-e': IISAnyaDodelatТоварEForm,
    'i-i-s-anya-dodelat-услуга-e': IISAnyaDodelatУслугаEForm
  },

});

export default translations;
