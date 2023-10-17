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
    public static final String ID = "gym_id";
    public static final String NAME = "gym_name";
    public static final String ADDRESS = "gym_address";
    public static final String  CITY= "gym_city";
    public static final String  CIF= "gym_cif";
    public static final String  PHONE= "gym_phone";
    public static final String  EMAIL= "gym_email";
    public static final String  SCHEDULE= "gym_schedule";
    public static final String  DESCRIPTION= "gym_description";
    public static final String  STATE= "gym_state";
    public static final String  USER_= "user_";
    public static final String  ATTR_PHOTO= "photo";



}
