﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.AnyaDodelat
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Табель смены.
    /// </summary>
    // *** Start programmer edit section *** (ТабельСмены CustomAttributes)

    // *** End programmer edit section *** (ТабельСмены CustomAttributes)
    [AutoAltered()]
    [Caption("Табель смены")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТабельСменыE", new string[] {
            "Дата as \'Дата\'",
            "НачалоСмены as \'Начало смены\'",
            "КонецСмены as \'Конец смены\'",
            "типЗанятости as \'Тип занятости\'",
            "сотрудник as \'Сотрудник\'",
            "сотрудник.ФИО as \'ФИО\'"}, Hidden=new string[] {
            "сотрудник.ФИО"})]
    [MasterViewDefineAttribute("ТабельСменыE", "сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("ТабельСменыL", new string[] {
            "Дата as \'Дата\'",
            "НачалоСмены as \'Начало смены\'",
            "КонецСмены as \'Конец смены\'",
            "типЗанятости as \'Тип занятости\'",
            "сотрудник.ФИО as \'ФИО\'"})]
    public class ТабельСмены : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private string fНачалоСмены;
        
        private string fКонецСмены;
        
        private IIS.AnyaDodelat.ТипЗанятости fтипЗанятости;
        
        private IIS.AnyaDodelat.сотрудник fсотрудник;
        
        // *** Start programmer edit section *** (ТабельСмены CustomMembers)

        // *** End programmer edit section *** (ТабельСмены CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ТабельСмены.Дата CustomAttributes)

        // *** End programmer edit section *** (ТабельСмены.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ТабельСмены.Дата Get start)

                // *** End programmer edit section *** (ТабельСмены.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ТабельСмены.Дата Get end)

                // *** End programmer edit section *** (ТабельСмены.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТабельСмены.Дата Set start)

                // *** End programmer edit section *** (ТабельСмены.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ТабельСмены.Дата Set end)

                // *** End programmer edit section *** (ТабельСмены.Дата Set end)
            }
        }
        
        /// <summary>
        /// КонецСмены.
        /// </summary>
        // *** Start programmer edit section *** (ТабельСмены.КонецСмены CustomAttributes)

        // *** End programmer edit section *** (ТабельСмены.КонецСмены CustomAttributes)
        [StrLen(255)]
        public virtual string КонецСмены
        {
            get
            {
                // *** Start programmer edit section *** (ТабельСмены.КонецСмены Get start)

                // *** End programmer edit section *** (ТабельСмены.КонецСмены Get start)
                string result = this.fКонецСмены;
                // *** Start programmer edit section *** (ТабельСмены.КонецСмены Get end)

                // *** End programmer edit section *** (ТабельСмены.КонецСмены Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТабельСмены.КонецСмены Set start)

                // *** End programmer edit section *** (ТабельСмены.КонецСмены Set start)
                this.fКонецСмены = value;
                // *** Start programmer edit section *** (ТабельСмены.КонецСмены Set end)

                // *** End programmer edit section *** (ТабельСмены.КонецСмены Set end)
            }
        }
        
        /// <summary>
        /// НачалоСмены.
        /// </summary>
        // *** Start programmer edit section *** (ТабельСмены.НачалоСмены CustomAttributes)

        // *** End programmer edit section *** (ТабельСмены.НачалоСмены CustomAttributes)
        [StrLen(255)]
        public virtual string НачалоСмены
        {
            get
            {
                // *** Start programmer edit section *** (ТабельСмены.НачалоСмены Get start)

                // *** End programmer edit section *** (ТабельСмены.НачалоСмены Get start)
                string result = this.fНачалоСмены;
                // *** Start programmer edit section *** (ТабельСмены.НачалоСмены Get end)

                // *** End programmer edit section *** (ТабельСмены.НачалоСмены Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТабельСмены.НачалоСмены Set start)

                // *** End programmer edit section *** (ТабельСмены.НачалоСмены Set start)
                this.fНачалоСмены = value;
                // *** Start programmer edit section *** (ТабельСмены.НачалоСмены Set end)

                // *** End programmer edit section *** (ТабельСмены.НачалоСмены Set end)
            }
        }
        
        /// <summary>
        /// типЗанятости.
        /// </summary>
        // *** Start programmer edit section *** (ТабельСмены.типЗанятости CustomAttributes)

        // *** End programmer edit section *** (ТабельСмены.типЗанятости CustomAttributes)
        public virtual IIS.AnyaDodelat.ТипЗанятости типЗанятости
        {
            get
            {
                // *** Start programmer edit section *** (ТабельСмены.типЗанятости Get start)

                // *** End programmer edit section *** (ТабельСмены.типЗанятости Get start)
                IIS.AnyaDodelat.ТипЗанятости result = this.fтипЗанятости;
                // *** Start programmer edit section *** (ТабельСмены.типЗанятости Get end)

                // *** End programmer edit section *** (ТабельСмены.типЗанятости Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТабельСмены.типЗанятости Set start)

                // *** End programmer edit section *** (ТабельСмены.типЗанятости Set start)
                this.fтипЗанятости = value;
                // *** Start programmer edit section *** (ТабельСмены.типЗанятости Set end)

                // *** End programmer edit section *** (ТабельСмены.типЗанятости Set end)
            }
        }
        
        /// <summary>
        /// Табель смены.
        /// </summary>
        // *** Start programmer edit section *** (ТабельСмены.сотрудник CustomAttributes)

        // *** End programmer edit section *** (ТабельСмены.сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "сотрудник"})]
        [NotNull()]
        public virtual IIS.AnyaDodelat.сотрудник сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (ТабельСмены.сотрудник Get start)

                // *** End programmer edit section *** (ТабельСмены.сотрудник Get start)
                IIS.AnyaDodelat.сотрудник result = this.fсотрудник;
                // *** Start programmer edit section *** (ТабельСмены.сотрудник Get end)

                // *** End programmer edit section *** (ТабельСмены.сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТабельСмены.сотрудник Set start)

                // *** End programmer edit section *** (ТабельСмены.сотрудник Set start)
                this.fсотрудник = value;
                // *** Start programmer edit section *** (ТабельСмены.сотрудник Set end)

                // *** End programmer edit section *** (ТабельСмены.сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТабельСменыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТабельСменыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТабельСменыE", typeof(IIS.AnyaDodelat.ТабельСмены));
                }
            }
            
            /// <summary>
            /// "ТабельСменыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТабельСменыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТабельСменыL", typeof(IIS.AnyaDodelat.ТабельСмены));
                }
            }
        }
    }
}
