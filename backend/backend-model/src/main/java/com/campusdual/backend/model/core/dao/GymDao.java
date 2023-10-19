package com.campusdual.backend.model.core.dao;

import com.ontimize.jee.server.dao.common.ConfigurationFile;
import com.ontimize.jee.server.dao.jdbc.OntimizeJdbcDaoSupport;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Repository;

@Lazy
@Repository(value = "GymDao")
@ConfigurationFile(
        configurationFile = "dao/GymDao.xml",
        configurationFilePlaceholder = "dao/placeholders.properties")

public class GymDao extends OntimizeJdbcDaoSupport {
    public static final String ID = "gymid";
    public static final String NAME = "name";
    public static final String ADDRESS = "address";
    public static final String  CITY= "city";
    public static final String  CIF= "cif";
    public static final String  PHONE= "phone";
    public static final String  EMAIL= "email";
    public static final String  SCHEDULE= "schedule";
    public static final String  DESCRIPTION= "description";
    public static final String  STATE= "state";
    public static final String  USER_= "user_";
    public static final String  ATTR_PHOTO= "photo";
    public static final String  IMAGE1= "image1";
    public static final String  IMAGE2= "image2";
    public static final String  IMAGE3= "image3";

}
