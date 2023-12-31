import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  услуга: DS.belongsTo('i-i-s-anya-dodelat-услуга', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-anya-dodelat-сотрудник', { inverse: 'услугиМастера', async: false })
});

export let ValidationRules = {
  услуга: {
    descriptionKey: 'models.i-i-s-anya-dodelat-услуги-мастера.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-anya-dodelat-услуги-мастера.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиМастераE', 'i-i-s-anya-dodelat-услуги-мастера', {
    услуга: belongsTo('i-i-s-anya-dodelat-услуга', 'Услуга', {
      наименование: attr('Наименование', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });
};
