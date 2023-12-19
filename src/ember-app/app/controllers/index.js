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
          caption: i18n.t('forms.application.sitemap.anya-dodelat.caption'),
          title: i18n.t('forms.application.sitemap.anya-dodelat.title'),
          children: [{
            link: 'i-i-s-anya-dodelat-график-работы-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-график-работы-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-график-работы-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-клиент-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-клиент-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-табель-смены-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-табель-смены-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-табель-смены-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-должности-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-должности-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-отсутствие-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-отсутствие-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-отсутствие-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-сотрудник-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-товар-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-товар-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-товар-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-услуга-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-услуга-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-визит-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-визит-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-визит-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-anya-dodelat-производитель-l',
            caption: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.anya-dodelat.i-i-s-anya-dodelat-производитель-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})