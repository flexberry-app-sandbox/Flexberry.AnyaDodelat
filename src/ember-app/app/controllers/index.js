import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-anya-dodelat-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-anya-dodelat-сотрудник-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-должности-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-anya-dodelat-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-anya-dodelat-должности-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.график-работы.caption'),
          title: i18n.t('forms.application.sitemap.график-работы.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-график-работы-l',
            caption: i18n.t('forms.application.sitemap.график-работы.i-i-s-anya-dodelat-график-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.график-работы.i-i-s-anya-dodelat-график-работы-l.title'),
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-табель-смены-l',
            caption: i18n.t('forms.application.sitemap.график-работы.i-i-s-anya-dodelat-табель-смены-l.caption'),
            title: i18n.t('forms.application.sitemap.график-работы.i-i-s-anya-dodelat-табель-смены-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-отсутствие-l',
            caption: i18n.t('forms.application.sitemap.график-работы.i-i-s-anya-dodelat-отсутствие-l.caption'),
            title: i18n.t('forms.application.sitemap.график-работы.i-i-s-anya-dodelat-отсутствие-l.title'),
            icon: 'edit',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-товары.caption'),
          title: i18n.t('forms.application.sitemap.справочник-товары.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-товар-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-anya-dodelat-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-anya-dodelat-товар-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-производитель-l',
            caption: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-anya-dodelat-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-товары.i-i-s-anya-dodelat-производитель-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.запись-на-визит.caption'),
          title: i18n.t('forms.application.sitemap.запись-на-визит.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-визит-l',
            caption: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-anya-dodelat-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.запись-на-визит.i-i-s-anya-dodelat-визит-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.услуги.caption'),
          title: i18n.t('forms.application.sitemap.услуги.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-услуга-l',
            caption: i18n.t('forms.application.sitemap.услуги.i-i-s-anya-dodelat-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.услуги.i-i-s-anya-dodelat-услуга-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.наши-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.наши-клиенты.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-клиент-l',
            caption: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-anya-dodelat-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.наши-клиенты.i-i-s-anya-dodelat-клиент-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})