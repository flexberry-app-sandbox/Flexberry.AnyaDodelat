import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-anya-dodelat-сотрудник', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-anya-dodelat-услуга', { inverse: null, async: false }),
  визит: DS.belongsTo('i-i-s-anya-dodelat-визит', { inverse: 'записьВизита', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-anya-dodelat-запись-визита.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-anya-dodelat-запись-визита.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-anya-dodelat-запись-визита.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  визит: {
    descriptionKey: 'models.i-i-s-anya-dodelat-запись-визита.validations.визит.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВизитаE', 'i-i-s-anya-dodelat-запись-визита', {
    комментарий: attr('Комментарий', { index: 0 }),
    сотрудник: belongsTo('i-i-s-anya-dodelat-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'фИО' }),
    услуга: belongsTo('i-i-s-anya-dodelat-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 4, hidden: true }),
      цена: attr('Цена', { index: 5 })
    }, { index: 3, displayMemberPath: 'наименование' })
  });
};
